/* ----------------- AUTO-GENERATED -------------- */
/* ----------------------------------------------- */

/* ------------------ DO NOT EDIT ---------------- */
/* ----------------------------------------------- */

import type {
  UnionLiteral,
  NumberLike,
  IntoNumber
} from '@cuppachino/type-space'

export namespace Season {
  /* --------------------- PUBLIC ------------------ */
  /* ----------------------------------------------- */

  export interface Props<
    Id extends NumberLike<Season.Id> = Season.Id,
    Season extends Season.Season = Season.Season
  > {
    id: Id
    season: Season
  }

  /* --------------------- PROPS ------------------- */
  /* ----------------------------------------------- */

  /**
   * `Id` attribute of `Season.Props`
   */
  export type Id = UnionLiteral<Seasons[number]['id'], number>

  /**
   * `Season` attribute of `Season.Props`
   */
  export type Season = UnionLiteral<Seasons[number]['season'], string>

  /* -------------------- HELPERS ------------------ */
  /* ----------------------------------------------- */

  /**
   * Infer `Season.Props` of `Seasons` where `Props.Id ⊆ T`.
   *
   * @example
   * ```ts
   * import type { Season } from "hexgate"
   *
   * declare const MySeason: Season.ById<0>
   * ```
   */
  export type ById<T extends NumberLike<Id>> = {
    [I in keyof Seasons]: Seasons[I] extends Props<IntoNumber<T>, infer _Season>
      ? Seasons[I]
      : never
  }[keyof Seasons]

  /**
   * Infer `Season.Props` of `Seasons` where `Props.Season ⊆ T`.
   *
   * @example
   * ```ts
   * import type { Season } from "hexgate"
   *
   * declare const MySeason: Season.BySeason<"PRESEASON 3">
   * ```
   */
  export type BySeason<T extends Season> = {
    [I in keyof Seasons]: Seasons[I] extends Props<infer _Id, T>
      ? Seasons[I]
      : never
  }[keyof Seasons]

  /* -------------------- INTERNAL ----------------- */
  /* ----------------------------------------------- */

  type Seasons = [
    Props<0, 'PRESEASON 3'>,
    Props<1, 'SEASON 3'>,
    Props<2, 'PRESEASON 2014'>,
    Props<3, 'SEASON 2014'>,
    Props<4, 'PRESEASON 2015'>,
    Props<5, 'SEASON 2015'>,
    Props<6, 'PRESEASON 2016'>,
    Props<7, 'SEASON 2016'>,
    Props<8, 'PRESEASON 2017'>,
    Props<9, 'SEASON 2017'>,
    Props<10, 'PRESEASON 2018'>,
    Props<11, 'SEASON 2018'>,
    Props<12, 'PRESEASON 2019'>,
    Props<13, 'SEASON 2019'>
  ]
}
