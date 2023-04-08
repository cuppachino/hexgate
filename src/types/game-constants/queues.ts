/* ----------------- AUTO-GENERATED -------------- */
/* ----------------------------------------------- */

/* ------------------ DO NOT EDIT ---------------- */
/* ----------------------------------------------- */

import type {
  UnionLiteral,
  NumberLike,
  IntoNumber
} from '@cuppachino/type-space'

export namespace Queue {
  /* --------------------- PUBLIC ------------------ */
  /* ----------------------------------------------- */

  export interface Props<
    QueueId extends NumberLike<Queue.QueueId> = Queue.QueueId,
    Map extends Queue.Map = Queue.Map,
    Description extends Queue.Description = Queue.Description,
    Notes extends Queue.Notes = Queue.Notes
  > {
    queueId: IntoNumber<QueueId>
    map: Map
    description: Description
    notes: Notes
  }

  /* --------------------- PROPS ------------------- */
  /* ----------------------------------------------- */

  /**
   * `QueueId` attribute of `Queue.Props`
   */
  export type QueueId = UnionLiteral<Queues[number]['queueId'], number>

  /**
   * `Map` attribute of `Queue.Props`
   */
  export type Map = UnionLiteral<Queues[number]['map'], string>

  /**
   * `Description` attribute of `Queue.Props`
   */
  export type Description = UnionLiteral<Queues[number]['description'], null>

  /**
   * `Notes` attribute of `Queue.Props`
   */
  export type Notes = UnionLiteral<Queues[number]['notes'], null>

  /* -------------------- HELPERS ------------------ */
  /* ----------------------------------------------- */

  /**
   * Infer `Queue.Props` of `Queues` where `Props.QueueId ⊆ T`.
   *
   * @example
   * ```ts
   * import type { Queue } from "hexgate"
   *
   * declare const MyQueue: Queue.ByQueueId<0>
   * ```
   */
  export type ByQueueId<T extends NumberLike<QueueId>> = {
    [I in keyof Queues]: Queues[I] extends Props<
      IntoNumber<T>,
      infer _Map,
      infer _Description,
      infer _Notes
    >
      ? Queues[I]
      : never
  }[keyof Queues]

  /**
   * Infer `Queue.Props` of `Queues` where `Props.Map ⊆ T`.
   *
   * @example
   * ```ts
   * import type { Queue } from "hexgate"
   *
   * declare const MyQueue: Queue.ByMap<"Custom games">
   * ```
   */
  export type ByMap<T extends Map> = {
    [I in keyof Queues]: Queues[I] extends Props<
      infer _QueueId,
      T,
      infer _Description,
      infer _Notes
    >
      ? Queues[I]
      : never
  }[keyof Queues]

  /**
   * Infer `Queue.Props` of `Queues` where `Props.Description ⊆ T`.
   *
   * @example
   * ```ts
   * import type { Queue } from "hexgate"
   *
   * declare const MyQueue: Queue.ByDescription<null>
   * ```
   */
  export type ByDescription<T extends Description> = {
    [I in keyof Queues]: Queues[I] extends Props<
      infer _QueueId,
      infer _Map,
      T,
      infer _Notes
    >
      ? Queues[I]
      : never
  }[keyof Queues]

  /**
   * Infer `Queue.Props` of `Queues` where `Props.Notes ⊆ T`.
   *
   * @example
   * ```ts
   * import type { Queue } from "hexgate"
   *
   * declare const MyQueue: Queue.ByNotes<null>
   * ```
   */
  export type ByNotes<T extends Notes> = {
    [I in keyof Queues]: Queues[I] extends Props<
      infer _QueueId,
      infer _Map,
      infer _Description,
      T
    >
      ? Queues[I]
      : never
  }[keyof Queues]

  /* -------------------- INTERNAL ----------------- */
  /* ----------------------------------------------- */

  type Queues = [
    Props<0, 'Custom games', null, null>,
    Props<
      2,
      "Summoner's Rift",
      '5v5 Blind Pick games',
      'Deprecated in patch 7.19 in favor of queueId 430'
    >,
    Props<
      4,
      "Summoner's Rift",
      '5v5 Ranked Solo games',
      'Deprecated in favor of queueId 420'
    >,
    Props<
      6,
      "Summoner's Rift",
      '5v5 Ranked Premade games',
      'Game mode deprecated'
    >,
    Props<
      7,
      "Summoner's Rift",
      'Co-op vs AI games',
      'Deprecated in favor of queueId 32 and 33'
    >,
    Props<
      8,
      'Twisted Treeline',
      '3v3 Normal games',
      'Deprecated in patch 7.19 in favor of queueId 460'
    >,
    Props<
      9,
      'Twisted Treeline',
      '3v3 Ranked Flex games',
      'Deprecated in patch 7.19 in favor of queueId 470'
    >,
    Props<
      14,
      "Summoner's Rift",
      '5v5 Draft Pick games',
      'Deprecated in favor of queueId 400'
    >,
    Props<
      16,
      'Crystal Scar',
      '5v5 Dominion Blind Pick games',
      'Game mode deprecated'
    >,
    Props<
      17,
      'Crystal Scar',
      '5v5 Dominion Draft Pick games',
      'Game mode deprecated'
    >,
    Props<
      25,
      'Crystal Scar',
      'Dominion Co-op vs AI games',
      'Game mode deprecated'
    >,
    Props<
      31,
      "Summoner's Rift",
      'Co-op vs AI Intro Bot games',
      'Deprecated in patch 7.19 in favor of queueId 830'
    >,
    Props<
      32,
      "Summoner's Rift",
      'Co-op vs AI Beginner Bot games',
      'Deprecated in patch 7.19 in favor of queueId 840'
    >,
    Props<
      33,
      "Summoner's Rift",
      'Co-op vs AI Intermediate Bot games',
      'Deprecated in patch 7.19 in favor of queueId 850'
    >,
    Props<
      41,
      'Twisted Treeline',
      '3v3 Ranked Team games',
      'Game mode deprecated'
    >,
    Props<
      42,
      "Summoner's Rift",
      '5v5 Ranked Team games',
      'Game mode deprecated'
    >,
    Props<
      52,
      'Twisted Treeline',
      'Co-op vs AI games',
      'Deprecated in patch 7.19 in favor of queueId 800'
    >,
    Props<
      61,
      "Summoner's Rift",
      '5v5 Team Builder games',
      'Game mode deprecated'
    >,
    Props<
      65,
      'Howling Abyss',
      '5v5 ARAM games',
      'Deprecated in patch 7.19 in favor of queueId 450'
    >,
    Props<
      67,
      'Howling Abyss',
      'ARAM Co-op vs AI games',
      'Game mode deprecated'
    >,
    Props<
      70,
      "Summoner's Rift",
      'One for All games',
      'Deprecated in patch 8.6 in favor of queueId 1020'
    >,
    Props<72, 'Howling Abyss', '1v1 Snowdown Showdown games', null>,
    Props<73, 'Howling Abyss', '2v2 Snowdown Showdown games', null>,
    Props<75, "Summoner's Rift", '6v6 Hexakill games', null>,
    Props<76, "Summoner's Rift", 'Ultra Rapid Fire games', null>,
    Props<78, 'Howling Abyss', 'One For All: Mirror Mode games', null>,
    Props<83, "Summoner's Rift", 'Co-op vs AI Ultra Rapid Fire games', null>,
    Props<
      91,
      "Summoner's Rift",
      'Doom Bots Rank 1 games',
      'Deprecated in patch 7.19 in favor of queueId 950'
    >,
    Props<
      92,
      "Summoner's Rift",
      'Doom Bots Rank 2 games',
      'Deprecated in patch 7.19 in favor of queueId 950'
    >,
    Props<
      93,
      "Summoner's Rift",
      'Doom Bots Rank 5 games',
      'Deprecated in patch 7.19 in favor of queueId 950'
    >,
    Props<
      96,
      'Crystal Scar',
      'Ascension games',
      'Deprecated in patch 7.19 in favor of queueId 910'
    >,
    Props<98, 'Twisted Treeline', '6v6 Hexakill games', null>,
    Props<100, "Butcher's Bridge", '5v5 ARAM games', null>,
    Props<
      300,
      'Howling Abyss',
      'Legend of the Poro King games',
      'Deprecated in patch 7.19 in favor of queueId 920'
    >,
    Props<310, "Summoner's Rift", 'Nemesis games', null>,
    Props<313, "Summoner's Rift", 'Black Market Brawlers games', null>,
    Props<
      315,
      "Summoner's Rift",
      'Nexus Siege games',
      'Deprecated in patch 7.19 in favor of queueId 940'
    >,
    Props<317, 'Crystal Scar', 'Definitely Not Dominion games', null>,
    Props<
      318,
      "Summoner's Rift",
      'ARURF games',
      'Deprecated in patch 7.19 in favor of queueId 900'
    >,
    Props<325, "Summoner's Rift", 'All Random games', null>,
    Props<400, "Summoner's Rift", '5v5 Draft Pick games', null>,
    Props<
      410,
      "Summoner's Rift",
      '5v5 Ranked Dynamic games',
      'Game mode deprecated in patch 6.22'
    >,
    Props<420, "Summoner's Rift", '5v5 Ranked Solo games', null>,
    Props<430, "Summoner's Rift", '5v5 Blind Pick games', null>,
    Props<440, "Summoner's Rift", '5v5 Ranked Flex games', null>,
    Props<450, 'Howling Abyss', '5v5 ARAM games', null>,
    Props<
      460,
      'Twisted Treeline',
      '3v3 Blind Pick games',
      'Deprecated in patch 9.23'
    >,
    Props<
      470,
      'Twisted Treeline',
      '3v3 Ranked Flex games',
      'Deprecated in patch 9.23'
    >,
    Props<600, "Summoner's Rift", 'Blood Hunt Assassin games', null>,
    Props<610, 'Cosmic Ruins', 'Dark Star: Singularity games', null>,
    Props<700, "Summoner's Rift", "Summoner's Rift Clash games", null>,
    Props<720, 'Howling Abyss', 'ARAM Clash games', null>,
    Props<
      800,
      'Twisted Treeline',
      'Co-op vs. AI Intermediate Bot games',
      'Deprecated in patch 9.23'
    >,
    Props<
      810,
      'Twisted Treeline',
      'Co-op vs. AI Intro Bot games',
      'Deprecated in patch 9.23'
    >,
    Props<820, 'Twisted Treeline', 'Co-op vs. AI Beginner Bot games', null>,
    Props<830, "Summoner's Rift", 'Co-op vs. AI Intro Bot games', null>,
    Props<840, "Summoner's Rift", 'Co-op vs. AI Beginner Bot games', null>,
    Props<850, "Summoner's Rift", 'Co-op vs. AI Intermediate Bot games', null>,
    Props<900, "Summoner's Rift", 'ARURF games', null>,
    Props<910, 'Crystal Scar', 'Ascension games', null>,
    Props<920, 'Howling Abyss', 'Legend of the Poro King games', null>,
    Props<940, "Summoner's Rift", 'Nexus Siege games', null>,
    Props<950, "Summoner's Rift", 'Doom Bots Voting games', null>,
    Props<960, "Summoner's Rift", 'Doom Bots Standard games', null>,
    Props<
      980,
      'Valoran City Park',
      'Star Guardian Invasion: Normal games',
      null
    >,
    Props<
      990,
      'Valoran City Park',
      'Star Guardian Invasion: Onslaught games',
      null
    >,
    Props<1000, 'Overcharge', 'PROJECT: Hunters games', null>,
    Props<1010, "Summoner's Rift", 'Snow ARURF games', null>,
    Props<1020, "Summoner's Rift", 'One for All games', null>,
    Props<1030, 'Crash Site', 'Odyssey Extraction: Intro games', null>,
    Props<1040, 'Crash Site', 'Odyssey Extraction: Cadet games', null>,
    Props<1050, 'Crash Site', 'Odyssey Extraction: Crewmember games', null>,
    Props<1060, 'Crash Site', 'Odyssey Extraction: Captain games', null>,
    Props<1070, 'Crash Site', 'Odyssey Extraction: Onslaught games', null>,
    Props<1090, 'Convergence', 'Teamfight Tactics games', null>,
    Props<1100, 'Convergence', 'Ranked Teamfight Tactics games', null>,
    Props<1110, 'Convergence', 'Teamfight Tactics Tutorial games', null>,
    Props<1111, 'Convergence', 'Teamfight Tactics test games', null>,
    Props<1200, 'Nexus Blitz', 'Nexus Blitz games', 'Deprecated in patch 9.2'>,
    Props<1300, 'Nexus Blitz', 'Nexus Blitz games', null>,
    Props<1400, "Summoner's Rift", 'Ultimate Spellbook games', null>,
    Props<1900, "Summoner's Rift", 'Pick URF games', null>,
    Props<2000, "Summoner's Rift", 'Tutorial 1', null>,
    Props<2010, "Summoner's Rift", 'Tutorial 2', null>,
    Props<2020, "Summoner's Rift", 'Tutorial 3', null>
  ]
}
