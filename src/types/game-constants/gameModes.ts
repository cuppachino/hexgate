/* ----------------- AUTO-GENERATED -------------- */
/* ----------------------------------------------- */

/* ------------------ DO NOT EDIT ---------------- */
/* ----------------------------------------------- */

import type { UnionLiteral } from '@cuppachino/type-space'

export namespace GameMode {
  /* --------------------- PUBLIC ------------------ */
  /* ----------------------------------------------- */

  export interface Props<
    GameMode extends GameMode.GameMode = GameMode.GameMode,
    Description extends GameMode.Description = GameMode.Description
  > {
    gameMode: GameMode
    description: Description
  }

  /* --------------------- PROPS ------------------- */
  /* ----------------------------------------------- */

  /**
   * `GameMode` attribute of `GameMode.Props`
   */
  export type GameMode = UnionLiteral<GameModes[number]['gameMode'], string>

  /**
   * `Description` attribute of `GameMode.Props`
   */
  export type Description = UnionLiteral<GameModes[number]['description'], string>

  /* -------------------- HELPERS ------------------ */
  /* ----------------------------------------------- */

  /**
   * Infer `GameMode.Props` of `GameModes` where `Props.GameMode ⊆ T`.
   *
   * @example
   * ```ts
   * import type { GameMode } from "hexgate"
   *
   * declare const MyGameMode: GameMode.ByGameMode<"CLASSIC">
   * ```
   */
  export type ByGameMode<T extends GameMode> = {
    [I in keyof GameModes]: GameModes[I] extends Props<T, infer _Description> ? GameModes[I] : never
  }[keyof GameModes]

  /**
   * Infer `GameMode.Props` of `GameModes` where `Props.Description ⊆ T`.
   *
   * @example
   * ```ts
   * import type { GameMode } from "hexgate"
   *
   * declare const MyGameMode: GameMode.ByDescription<"Classic Summoner's Rift and Twisted Treeline games">
   * ```
   */
  export type ByDescription<T extends Description> = {
    [I in keyof GameModes]: GameModes[I] extends Props<infer _GameMode, T> ? GameModes[I] : never
  }[keyof GameModes]

  /* -------------------- INTERNAL ----------------- */
  /* ----------------------------------------------- */

  type GameModes = [
    Props<'CLASSIC', "Classic Summoner's Rift and Twisted Treeline games">,
    Props<'ODIN', 'Dominion/Crystal Scar games'>,
    Props<'ARAM', 'ARAM games'>,
    Props<'TUTORIAL', 'Tutorial games'>,
    Props<'URF', 'URF games'>,
    Props<'DOOMBOTSTEEMO', 'Doom Bot games'>,
    Props<'ONEFORALL', 'One for All games'>,
    Props<'ASCENSION', 'Ascension games'>,
    Props<'FIRSTBLOOD', 'Snowdown Showdown games'>,
    Props<'KINGPORO', 'Legend of the Poro King games'>,
    Props<'SIEGE', 'Nexus Siege games'>,
    Props<'ASSASSINATE', 'Blood Hunt Assassin games'>,
    Props<'ARSR', "All Random Summoner's Rift games">,
    Props<'DARKSTAR', 'Dark Star: Singularity games'>,
    Props<'STARGUARDIAN', 'Star Guardian Invasion games'>,
    Props<'PROJECT', 'PROJECT: Hunters games'>,
    Props<'GAMEMODEX', 'Nexus Blitz games'>,
    Props<'ODYSSEY', 'Odyssey: Extraction games'>,
    Props<'NEXUSBLITZ', 'Nexus Blitz games'>,
    Props<'ULTBOOK', 'Ultimate Spellbook games'>
  ]
}
