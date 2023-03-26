/* ----------------- AUTO-GENERATED -------------- */
/* ----------------------------------------------- */

/* ------------------ DO NOT EDIT ---------------- */
/* ----------------------------------------------- */

import type { UnionLiteral, NumberLike, IntoNumber } from '@cuppachino/type-space'

export namespace Map {
  /* --------------------- PUBLIC ------------------ */
  /* ----------------------------------------------- */

  export interface Props<
    MapId extends NumberLike<Map.MapId> = Map.MapId,
    MapName extends Map.MapName = Map.MapName,
    Notes extends Map.Notes = Map.Notes
  > {
    mapId: MapId
    mapName: MapName
    notes: Notes
  }

  /* --------------------- PROPS ------------------- */
  /* ----------------------------------------------- */

  /**
   * `MapId` attribute of `Map.Props`
   */
  export type MapId = UnionLiteral<Maps[number]['mapId'], number>

  /**
   * `MapName` attribute of `Map.Props`
   */
  export type MapName = UnionLiteral<Maps[number]['mapName'], string>

  /**
   * `Notes` attribute of `Map.Props`
   */
  export type Notes = UnionLiteral<Maps[number]['notes'], string>

  /* -------------------- HELPERS ------------------ */
  /* ----------------------------------------------- */

  /**
   * Infer `Map.Props` of `Maps` where `Props.MapId ⊆ T`.
   *
   * @example
   * ```ts
   * import type { Map } from "hexgate"
   *
   * declare const MyMap: Map.ByMapId<1>
   * ```
   */
  export type ByMapId<T extends NumberLike<MapId>> = {
    [I in keyof Maps]: Maps[I] extends Props<IntoNumber<T>, infer _MapName, infer _Notes>
      ? Maps[I]
      : never
  }[keyof Maps]

  /**
   * Infer `Map.Props` of `Maps` where `Props.MapName ⊆ T`.
   *
   * @example
   * ```ts
   * import type { Map } from "hexgate"
   *
   * declare const MyMap: Map.ByMapName<"Summoner's Rift">
   * ```
   */
  export type ByMapName<T extends MapName> = {
    [I in keyof Maps]: Maps[I] extends Props<infer _MapId, T, infer _Notes> ? Maps[I] : never
  }[keyof Maps]

  /**
   * Infer `Map.Props` of `Maps` where `Props.Notes ⊆ T`.
   *
   * @example
   * ```ts
   * import type { Map } from "hexgate"
   *
   * declare const MyMap: Map.ByNotes<"Original Summer variant">
   * ```
   */
  export type ByNotes<T extends Notes> = {
    [I in keyof Maps]: Maps[I] extends Props<infer _MapId, infer _MapName, T> ? Maps[I] : never
  }[keyof Maps]

  /* -------------------- INTERNAL ----------------- */
  /* ----------------------------------------------- */

  type Maps = [
    Props<1, "Summoner's Rift", 'Original Summer variant'>,
    Props<2, "Summoner's Rift", 'Original Autumn variant'>,
    Props<3, 'The Proving Grounds', 'Tutorial Map'>,
    Props<4, 'Twisted Treeline', 'Original Version'>,
    Props<8, 'The Crystal Scar', 'Dominion map'>,
    Props<10, 'Twisted Treeline', 'Last TT map'>,
    Props<11, "Summoner's Rift", 'Current Version'>,
    Props<12, 'Howling Abyss', 'ARAM map'>,
    Props<14, "Butcher's Bridge", 'Alternate ARAM map'>,
    Props<16, 'Cosmic Ruins', 'Dark Star: Singularity map'>,
    Props<18, 'Valoran City Park', 'Star Guardian Invasion map'>,
    Props<19, 'Substructure 43', 'PROJECT: Hunters map'>,
    Props<20, 'Crash Site', 'Odyssey: Extraction map'>,
    Props<21, 'Nexus Blitz', 'Nexus Blitz map'>,
    Props<22, 'Convergence', 'Teamfight Tactics map'>
  ]
}
