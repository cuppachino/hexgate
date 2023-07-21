import type { Combine } from '@cuppachino/type-space'
import type { LcuComponents } from '../openapi/components.js'

export interface LobbyDto
  extends Combine<
    LcuComponents['schemas']['LolLobbyLobbyDto'] & {
      mucJwtDto?: {
        channelClaim: string
        domain: string
        jwt: string
        targetRegion: string
      }
      multiUserChatId?: string
      multiUserChatPassword?: string
    }
  > {}

export interface LobbyMemberDto
  extends Combine<
    LcuComponents['schemas']['LolLobbyLobbyParticipantDto'] & {
      primaryChampionPreference?: number
      secondaryChampionPreference?: number
    }
  > {}

export interface LobbyCountdownDto {
  countdown: number
  enabled: boolean
}

export interface LobbyMatchmakingSearchState
  extends Required<
    LcuComponents['schemas']['LolLobbyLobbyMatchmakingSearchResource']
  > {}

export interface LobbyBotChampionDto
  extends Required<LcuComponents['schemas']['LolLobbyLobbyBotChampion']> {}

export interface LobbyInvitationDto
  extends Required<LcuComponents['schemas']['LolLobbyLobbyInvitationDto']> {}

/**
 * Lobby events from the LCU websocket.
 * ```
 * OnJsonApiEvent_lol-lobby_v2_lobby
 * ```
 */
export type LobbyEvent =
  | {
      data: LobbyDto
      eventType: 'Create' | 'Update'
      uri: '/lol-lobby/v2/lobby'
    }
  | {
      data: null
      eventType: 'Delete'
      uri: '/lol-lobby/v2/lobby'
    }
  | {
      data: LobbyMatchmakingSearchState
      eventType: 'Update'
      uri: '/lol-lobby/v2/lobby/matchmaking/search-state'
    }
  | {
      data: LobbyMemberDto[]
      eventType: 'Update'
      uri: '/lol-lobby/v2/lobby/members'
    }
  | {
      data: LobbyCountdownDto
      eventType: 'Update'
      uri: '/lol-lobby/v2/lobby/countdown'
    }
  | {
      data: LobbyBotChampionDto[]
      eventType: 'Update'
      uri: '/lol-lobby/v2/lobby/custom/available-bots'
    }
  | {
      data: boolean
      eventType: 'Update'
      uri: '/lol-lobby/v2/lobby/custom/bots-enabled'
    }
  | {
      data: LobbyInvitationDto[]
      eventType: 'Create' | 'Update' | 'Delete' // todo: verify
      uri: '/lol-lobby/v2/lobby/invitations'
    }
