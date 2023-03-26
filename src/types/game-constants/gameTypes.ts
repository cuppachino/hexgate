/* ----------------- AUTO-GENERATED -------------- */
/* ----------------------------------------------- */

/* ------------------ DO NOT EDIT ---------------- */
/* ----------------------------------------------- */

import type { UnionLiteral } from '@cuppachino/type-space'

export namespace GameType {
  /* --------------------- PUBLIC ------------------ */
  /* ----------------------------------------------- */

  export interface Props<
    Gametype extends GameType.Gametype = GameType.Gametype,
    Description extends GameType.Description = GameType.Description
  > {
    gametype: Gametype
    description: Description
  }

  /* --------------------- PROPS ------------------- */
  /* ----------------------------------------------- */

  /**
   * `Gametype` attribute of `GameType.Props`
   */
  export type Gametype = UnionLiteral<GameTypes[number]['gametype'], string>

  /**
   * `Description` attribute of `GameType.Props`
   */
  export type Description = UnionLiteral<GameTypes[number]['description'], string>

  /* -------------------- HELPERS ------------------ */
  /* ----------------------------------------------- */

  /**
   * Infer `GameType.Props` of `GameTypes` where `Props.Gametype ⊆ T`.
   *
   * @example
   * ```ts
   * import type { GameType } from "hexgate"
   *
   * declare const MyGameType: GameType.ByGametype<"CUSTOM_GAME">
   * ```
   */
  export type ByGametype<T extends Gametype> = {
    [I in keyof GameTypes]: GameTypes[I] extends Props<T, infer _Description> ? GameTypes[I] : never
  }[keyof GameTypes]

  /**
   * Infer `GameType.Props` of `GameTypes` where `Props.Description ⊆ T`.
   *
   * @example
   * ```ts
   * import type { GameType } from "hexgate"
   *
   * declare const MyGameType: GameType.ByDescription<"Custom games">
   * ```
   */
  export type ByDescription<T extends Description> = {
    [I in keyof GameTypes]: GameTypes[I] extends Props<infer _Gametype, T> ? GameTypes[I] : never
  }[keyof GameTypes]

  /* -------------------- INTERNAL ----------------- */
  /* ----------------------------------------------- */

  type GameTypes = [
    Props<'CUSTOM_GAME', 'Custom games'>,
    Props<'TUTORIAL_GAME', 'Tutorial games'>,
    Props<'MATCHED_GAME', 'all other games'>
  ]
}
