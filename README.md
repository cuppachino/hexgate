# Hexgate

[![Discord](https://img.shields.io/discord/1080840305441525766?color=5865f2\&label=\&logo=discord\&logoColor=ffffff)](https://discord.gg/HEd72YnzVq)
[![Release](https://github.com/cuppachino/hexgate/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/cuppachino/hexgate/actions/workflows/release.yml)
![License](https://img.shields.io/github/license/cuppachino/hexgate?color=ffca4a)
![npm (scoped)](https://img.shields.io/npm/v/hexgate?color=%23fb3e44)
![npm](https://img.shields.io/npm/dw/hexgate)

[Hexgate](https://www.npmjs.com/package/hexgate) is a work-in-progress LCU suite. It is **not** endorsed by Riot Games. You can find out more about what that means [here](https://www.riotgames.com/en/legal). Thank you Riot ❤️ for providing a public API for us to play with. If you have any questions, feel free to join the [cuppachino discord](https://discord.gg/HEd72YnzVq).

## Scope

Hexgate is currently ESM-only and it's not intended for use in browsers (the LoL client does not allow browser connections). If CJS support is important to you, please open an issue. I am aware electron still lacks ESM support.

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

## Usage

### Authentication

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

## Development

This package uses [pnpm](https://pnpm.io) to manage dependencies. If you don't have pnpm, it can be installed globally using `npm`, `yarn`, `brew`, or `scoop`, as well as some other options. Check out the [pnpm documentation](https://pnpm.io/installation) for more information.

```ps1
pnpm i
```
