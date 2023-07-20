import type { LcuComponents } from '../openapi/components.js'

export namespace Ranked {
  export type Tier = LcuComponents['schemas']['LolRankedLeagueTier']

  export type Division = LcuComponents['schemas']['LolRankedLeagueDivision']

  export type Queue = LcuComponents['schemas']['LolRankedLeagueQueueType']
}
