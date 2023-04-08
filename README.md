# Hexgate

[![Discord](https://img.shields.io/discord/1080840305441525766?color=5865f2\&label=\&logo=discord\&logoColor=ffffff)](https://discord.gg/HEd72YnzVq)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f9cec6d6f8cf407fb2ef8a4ab82af87c)](https://app.codacy.com/gh/cuppachino/hexgate?utm_source=github.com\&utm_medium=referral\&utm_content=cuppachino/hexgate\&utm_campaign=Badge_Grade)
[![Release](https://github.com/cuppachino/hexgate/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/cuppachino/hexgate/actions/workflows/release.yml)
[![License](https://img.shields.io/github/license/cuppachino/hexgate?color=ffca4a)](https://github.com/cuppachino/hexgate/blob/528f647166eddef82e0ceb15ac8feafb56e97773/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/hexgate?color=%23fb3e44)](https://www.npmjs.com/package/hexgate)
[![npm](https://img.shields.io/npm/dw/hexgate)](https://www.npmjs.com/package/hexgate)

[Hexgate](https://www.npmjs.com/package/hexgate) is a work-in-progress LCU suite. It is **not** endorsed by Riot Games. You can find out more about what that means [here](https://www.riotgames.com/en/legal). Thank you Riot ❤️ for providing a public API for us to play with. If you have any questions, feel free to join the [cuppachino discord](https://discord.gg/HEd72YnzVq).

## Scope

*   As of #19, Hexgate can be used in both ESM and CJS node environments. If you have any problems, please open an issue. Thanks!

Please refer to the [wiki](https://github.com/cuppachino/hexgate/wiki) until Hexgate is more mature. I am planning a website for Hexgate, but at the moment I am focused on what Hexgate should become.

<!-- todo: add more info -->

## Installation

Add it to your own project using your favorite package manager.

```shell
pnpm add hexgate
```

```shell
npm i hexgate
```

```shell
yarn add hexgate
```

### ESM

```ts
import { ... } from "hexgate"
```

### CJS

```ts
(async () => {
  const { ... } = await import("hexgate")
})()
```

## Authentication

Wait for the client by passing the [`auth`](https://github.com/cuppachino/hexgate/blob/main/src/modules/auth/index.ts) function to the [`poll`](https://github.com/cuppachino/hexgate/blob/1e35a420382523bf1b0bf60267aa8314fce7a457/src/utils/poll.ts) utility.

```ts
import { auth, poll } from "hexgate"

const credentials = await poll(auth)
```

Opt-out of safe authentication by explicity passing an `undefined` certifcate.

```ts
import { auth } from "hexgate"

// This throws if the client isn't running.
const unsafeCredentials = await auth({ certificate: undefined })
```

Once you have the credentials, you can create a new [`Hexgate`](./src/modules/hexgate/index.ts) instance. I've named mine `hexgate` or `hx` in the examples below.

```ts
import { Hexgate, /* createHexgate */ } from "hexgate"

const hexgate = new Hexgate(credentials)
// const hx = createHexgate(credentials)
```

## Builder API

The simplest way of getting started is to "`.build`" a request function. The builder uses generics to infer the arguments and return type of the request.

```ts
const hexgate = new Hexgate(await auth())

// (arg: string[], init?: any) => Promise<ApiResponse<{ ... }>>
const getSummonersFromNames = hexgate
  .build('/lol-summoner/v2/summoners/names')
  .method('post')
  .create()

const summoner = await getSummonersByName(['dubbleignite'])
console.log(summoner)
```

## Recipe API

[`createRecipe`](./src/modules/hexgate/recipe.ts) is a higher-order function for transforming a request's parameters and response. It is a useful tool for morphing the LCU's API into your own. There are several ways to use the functions provided by the callback, and we'll take a look at each one.

### Intro

#### Step 1: Create a recipe

This is identical to the builder API, except the request won't be built until a hexgate instance is passed to the recipe. This is useful for defining requests ahead of time or in another file.

```ts
import { createRecipe } from "hexgate"

/**
 * (hexgate: T) => (arg: string[], init?: RequestInit) => Promise<ApiResponse<{...}>>
 */
const getSummonersFromNamesRecipe = createRecipe(({ build }) =>
  build('/lol-summoner/v2/summoners/names')
    .method('post')
    .create()
)
```

#### Step 2: Once you have a recipe, you just need to pass it a `Hexgate` instance.

```ts
const getSummonersFromNames = getSummonersFromNamesRecipe(hexgate)

const summoners = await getSummonersFromNames(['dubbleignite'])
console.table(summoners.data)
```

### Transforming requests

#### Wrap

Calling `wrap` without any arguments will default to the request function returned by `build`. The following cases are all equivalent:

```ts
const summonersRecipe = createRecipe(({ build, wrap, unwrap }) => ({
  /**
  * (arg: { ids?: string; }, init?: RequestInit) => Promise<ApiResponse<{...}>>
  */
  fromIds_basic: build('/lol-summoner/v2/summoners')
    .method('get')
    .create(),

  /**
  * (arg: { ids?: string; }, init?: RequestInit) => Promise<ApiResponse<{...}>>
  */  
  fromIds_inferParams_noArg: wrap(
    build('/lol-summoner/v2/summoners').method('get').create()
  )(),

  /**
  * (arg: { ids?: string; }, init?: RequestInit) => Promise<ApiResponse<{...}>>
  */  
  fromIds_inferParams_undefinedMethods_0: wrap(
    build('/lol-summoner/v2/summoners').method('get').create()
  )({}),

  /**
  * (arg: { ids?: string; }, init?: RequestInit) => Promise<ApiResponse<{...}>>
  */  
  fromIds_inferParams_undefinedMethods_1: wrap(
    build('/lol-summoner/v2/summoners').method('get').create()
  )({
    from: undefined,
    to: undefined,
  })
}))
```

But really you probably want to use `wrap` to define transformations.

```ts
const summonersRecipe = createRecipe(({ build, wrap, unwrap }) => ({
  /**
   * (summonerIds: (number | `${number}`)[], init?: RequestInit | undefined) => Promise<ApiResponse<{...}>>
   */
  fromIds_parameters_can_be_overwritten: wrap(
    build('/lol-summoner/v2/summoners')
      .method('get')
      .create()
  )({
    // The return type is constrained by the request function.
    // Here it must extend [{ ids?: string }, RequestInit | undefined]
    from(summonerIds: Array<`${number}` | number>, init?) {
      return [{ ids: JSON.stringify(summonerIds) }, init]
    }
  }
  )

  /**
   * (arg: { ids?: string }, init?: RequestInit) => Promise<{...}>
   */
  fromIds_response_can_be_transformed: wrap(
    build('/lol-summoner/v2/summoners').method('get').create()
  )({
    // The response type is inferred from the request function.
    // here we are extracting the data property from the response.
    async to(response) {
      return (await response).data
    }
  }),

  /**
   * (summonerIds: (number | `${number}`)[], init?: RequestInit | undefined) => Promise<{...}>
   */
  fromIds_response_can_be_unwrapped: wrap(
    build('/lol-summoner/v2/summoners').method('get').create()
  )({
    from(summonerIds: Array<`${number}` | number>, init?) {
      return [{ ids: JSON.stringify(summonerIds) }, init]
    },
    // shorthand for the previous example with optional error message argument
    to: unwrap()
  }),
}))
```

## Development

This package uses [pnpm](https://pnpm.io) to manage dependencies. If you don't have pnpm, it can be installed globally using `npm`, `yarn`, `brew`, or `scoop`, as well as some other options. Check out the [pnpm documentation](https://pnpm.io/installation) for more information.

```ps1
pnpm i
```
