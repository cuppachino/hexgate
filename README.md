# Hexgate

[![Discord](https://img.shields.io/discord/1080840305441525766?color=5865f2\&label=\&logo=discord\&logoColor=ffffff)](https://discord.gg/HEd72YnzVq)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f9cec6d6f8cf407fb2ef8a4ab82af87c)](https://app.codacy.com/gh/cuppachino/hexgate?utm_source=github.com\&utm_medium=referral\&utm_content=cuppachino/hexgate\&utm_campaign=Badge_Grade)
[![Release](https://github.com/cuppachino/hexgate/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/cuppachino/hexgate/actions/workflows/release.yml)
[![License](https://img.shields.io/github/license/cuppachino/hexgate?color=ffca4a)](https://github.com/cuppachino/hexgate/blob/528f647166eddef82e0ceb15ac8feafb56e97773/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/hexgate?color=%23fb3e44)](https://www.npmjs.com/package/hexgate)

[Hexgate](https://www.npmjs.com/package/hexgate) is a work-in-progress LCU suite. It is **not** endorsed by Riot Games. You can find out more about what that means [here](https://www.riotgames.com/en/legal). Thank you Riot ❤️ for providing a public API for us to play with. If you have any questions, feel free to join the [cuppachino discord](https://discord.gg/HEd72YnzVq).

Please refer to the [wiki](https://github.com/cuppachino/hexgate/wiki) for more info.

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
import hexgate = require("hexgate")
const { ... } = hexgate
```

## Authentication

Wait for the client by passing the [`auth`](https://github.com/cuppachino/hexgate/blob/main/src/modules/auth/index.ts) function to the [`poll`](https://github.com/cuppachino/hexgate/blob/main/src/utils/poll.ts) utility.

```ts
import { auth, poll } from "hexgate"

const credentials = await poll(auth)
```

Opt-out of safe authentication by explicity passing an `undefined` certifcate.

```ts
const unsafeCredentials = await auth({ certificate: undefined })
```

Once you have the credentials, you can create a new [`Hexgate`](./src/modules/hexgate/index.ts) and [`LcuClient`](./src/modules/websocket/index.ts).

```ts
import { Hexgate as HttpsClient, LcuClient as WsClient } from "hexgate"

const httpsClient = new HttpsClient(credentials)
const websocketClient = new WsClient(credentials)
```

Working with multiple clients? Get get `all` credentials.

```ts
import { auth, createHexgate, createLcuClient, poll, zip } from 'hexgate'

const credentials = await poll(() => auth({ all: true }))

// ~ some multi-connection interface
const clients = new Set(
  zip(
    credentials.map(createHexgate),
    credentials.map(createLcuClient)
  )
)
```

## Builder API

The simplest way of getting started is to "`.build`" a request function. The builder uses generics to infer the parameters and return type of the request.

```ts
import { Hexgate as HttpsClient } from 'hexgate'

const https = new HttpsClient(credentials)

// (arg: string[], init?: any) => Promise<ApiResponse<{ ... }>>
const getSummonersFromNames = https
  .build('/lol-summoner/v2/summoners/names')
  .method('post')
  .create()

const summoner = await getSummonersByName(['dubbleignite'])
console.log(summoner.data)
```

## Websocket Events

Subscribe to LCU events through the client.

```ts
import { LcuClient as WsClient } from 'hexgate'

const ws = new WsClient(credentials)

ws.subscribe(
  'OnJsonApiEvent_lol-champ-select_v1_session',
  ({ data, eventType, uri }) => {
    // side effects
  }
)
```

> Note: Since many endpoints will subscribe you to multiple uris, its difficult to provide meaningful type inference for the data property. Import `LcuComponents` type when necessary and/or open a PR to improve typings - which would be greatly appreciated! I'm just improving types as I need them.

## ⚡️ Connection

The [`Connection`](https://github.com/cuppachino/hexgate/blob/main/src/modules/connection/index.ts) class further abstracts `Hexgate` & `LcuClient` and handles authentication between client shutdowns. Configuration is optional.

```ts
import { Connection } from 'hexgate'

const client = new Connection({
  // Recipe API (createRecipe or recipe)
  createRecipe({ build, unwrap }) {
    return {
      getCurrentSummoner: unwrap(
        build('/lol-summoner/v1/current-summoner').method('get').create()
      )
    }
  },
  // Propagate status to browser windows.
  onStatusChange(status) {
    emit('status', status)
  },
  // Init
  async onConnect(con) {
    con.ws.subscribe('OnJsonApiEvent_lol-champ-select_v1_session', handleChampSelect)
    const summoner = await con.recipe.getCurrentSummoner()
    con.logger.info(summoner, `Welcome, ${summoner.displayName}`)
  },
  // Automatically reconnect
  async onDisconnect(discon) {
    await sleep(4000)
    discon.connect()
  },
  // Authentication interval
  interval: 2000,
  // Bring any logger
  logger: pino({
    name: 'main' as const
  })
})

client.connect()
```

The `Connection` class supports recipes, define a `recipe: Recipe` or a `createRecipe: RecipeApiFn` method in the `ConnectionConfig` constructor argument.

```ts
import { Connection, createRecipe } from 'hexgate'

const recipe = createRecipe(({ build }) => ({/*...*/}))
const client = new Connection({
  recipe
})
```

```ts
import { Connection } from 'hexgate'

const client = new Connection({
  createRecipe({ build }) { return {/*...*/} }
})
```

<p align='center'>
  <img src="connection.excalidraw.png" width=600/>
</p>

## Recipe API

[`createRecipe`](https://github.com/cuppachino/hexgate/blob/main/src/modules/recipe/index.ts#L78) is a higher-order function for transforming a request's parameters and response. It is a useful tool for morphing the LCU's API into your own. There are several ways to use the functions provided by the callback, and we'll take a look at each one.

### Intro

#### Step 1: Create a recipe

This is identical to the builder API, except the request function isn't built until a hexgate instance is given to the recipe. This is useful for modeling requests ahead of time for usage in other places.

```ts
import { createRecipe } from "hexgate"

/**
 * <T extends HttpsClient>(httpsClient: T) => 
 *   (arg: string[], init?: RequestInit) => 
 *     Promise<ApiResponse<{...}>>
 */
const getSummonersFromNamesRecipe = createRecipe(({ build }) =>
  build('/lol-summoner/v2/summoners/names')
    .method('post')
    .create()
)
```

#### Step 2: Once you have a recipe, you just need to pass it a `Hexgate`.

```ts
const getSummonersFromNames = getSummonersFromNamesRecipe(httpsClient)

const summoners = await getSummonersFromNames(['dubbleignite'])
console.table(summoners.data)
```

### 🦋 Transforming requests

Use [`wrap`](https://github.com/cuppachino/hexgate/blob/main/src/utils/proxy-function.ts#L51), `from`, `to`, and `unwrap` to design your api.

```ts
const summonersRecipe = createRecipe(({ build, wrap, from, to, unwrap }) => ({
  getSummoners: {
    /**
     * Default for reference.
     * (arg: { ids?: string; }, init?: RequestInit) => Promise<ApiResponse<{...}>>
     */
    v2SummonersDefault: build('/lol-summoner/v2/summoners')
      .method('get')
      .create(),

    /**
     * unwrap extracts the data property from an ApiResponse.
     * (arg: { ids?: string }, init?: RequestInit) => Promise<{...}>
     */
    v2SummonersAwaited: unwrap(
      build('/lol-summoner/v2/summoners').method('get').create(),
    ),

    /**
     * wrap let's us overwrite the parameters type by supplying conversion functions.
     * (summonerIds: (number | `${number}`)[], init?: RequestInit | undefined) => Promise<{...}>
     */
    fromSummonerIds: wrap(
      build('/lol-summoner/v2/summoners').method('get').create(),
    )({
      // The return type of `from` is constrained by the expected return type of the function being wrapped.
      from(summonerIds: Array<`${number}` | number>, init?) {
        return [{ ids: JSON.stringify(summonerIds) }, init];
      },
      // awaits data similarly to `unwrap`
      to,
    }),
  },
}));
```

### ⚒️ `Recipe`, `RecipeApiFn`, and `CreateWithRecipe`

Some features have options that accept a [`Recipe`](https://github.com/cuppachino/hexgate/blob/main/src/modules/recipe/index.ts#L8), the product of `createRecipe`, or a [`RecipeApiFn`](https://github.com/cuppachino/hexgate/blob/main/src/modules/recipe/index.ts#16), the api argument expected by `createRecipe`. You can achieve similar functionality in your own code by extending [`CreateWithRecipe`](https://github.com/cuppachino/hexgate/blob/main/src/modules/recipe/index.ts#L40) or implementing its overloaded constructor signature.

```ts
import type { CreateWithRecipe } from 'hexgate'

class Foo<T> extends CreateWithRecipe<T> {}
new Foo(recipe)
new Foo((recipeApi) => "your recipe" as const)
```

### Exporting recipes

If you want to export a recipe, you *might* get a type error. This is because the return type of `createRecipe` is inferred with references to `@cuppachino/openapi-fetch` and `node-fetch-commonjs`. To fix this, install the packages as dev dependencies and apply one of the following solutions to your `tsconfig.json`:

#### Map paths (Recommended)

Use this option if you are making a library.

```json
{
  "compilerOptions": {
    "paths": {
      "@cuppachino/openapi-fetch": ["./node_modules/@cuppachino/openapi-fetch"],
      "node-fetch-commonjs": ["./node_modules/node-fetch-commonjs"]
    }
  }
}
```

#### Add types to the global scope (apps)

This *can* be used in applications, but it's not recommended.

```json
{
  "compilerOptions": {
    "types": ["@cuppachino/openapi-fetch", "node-fetch-commonjs"]
  }
}
```

## Additional features

### LcuValue

The [`LcuValue`](https://github.com/cuppachino/hexgate/blob/main/src/modules/lcu-value/index.ts) class implements [`Update`](https://github.com/cuppachino/hexgate/blob/main/src/types/update.ts) and [`CreateWithRecipe`](https://github.com/cuppachino/hexgate/blob/main/src/modules/recipe/index.ts#L40). It's useful for caching data retrieved from the LCU.

```ts
import { Connection, LcuValue, type OperationResponses } from 'hexgate'

type LolOwnedChampionsMinimal =
  OperationResponses<'GetLolChampionsV1OwnedChampionsMinimal'>

class ChampionLookup extends LcuValue<LolOwnedChampionsMinimal> {
  constructor() {
    super(({ build, unwrap }) =>
      unwrap(
        build('/lol-champions/v1/owned-champions-minimal')
          .method('get')
          .create()
      )
    )
  }

  championById(id: string | number | undefined) {
    return this.inner?.find((c) => c.id === Number(id ?? 0))
  }
}

const champions = new ChampionLookup()

const client = new Connection({
  async onConnect(con) {
    await champions.update(con.https)
    con.logger.info(
    champions.championById(1) satisfies
        | Partial<LolOwnedChampionsMinimal>[number]
    )
  }
})

client.connect()
```

## Development

This package uses [pnpm](https://pnpm.io) to manage dependencies. If you don't have pnpm, it can be installed globally using `npm`, `yarn`, `brew`, or `scoop`, as well as some other options. Check out the [pnpm documentation](https://pnpm.io/installation) for more information.

```ps1
pnpm i
```
