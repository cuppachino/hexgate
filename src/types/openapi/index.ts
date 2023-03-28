import type { Combine, KeyOf } from '@cuppachino/type-space'
import type { Equal, Expect } from '@type-challenges/utils'
import type { PickInner } from '../generic.js'
import type { LcuOperations } from './operations.js'

export type { LcuComponents } from './components.js'
export type { LcuOperations } from './operations.js'
export type { LcuPaths } from './paths.js'

/**
 * A union of known LCU response codes.
 */
export type LcuResponseCode = KeyOf<
  LcuOperations[keyof LcuOperations]['responses'] extends infer U ? NonNullable<U> : never
>

/**
 * Pick all operations from `LcuOperations` that have a `Prop` key.
 *
 * @remarks This does not exclude properties from the inner operations.
 * It excludes an entire operation if it does not have a `Prop` property.
 *
 * @example Create a lens focusing on operations that have a `parameters` property, i.e. request operations that require Some(parameters)
 * ```ts
 * type LcuOperationsWithParemeters = LcuOperationsLens<'parameters'>
 * ```
 */
// export type LcuOperationsLens<Prop extends 'responses' | 'parameters'> = Combine<
//   PickInner<LcuOperations, Prop>
// >
export type LcuOperationsLens<Prop extends 'responses' | 'parameters' | 'requestBody'> = Combine<
  PickInner<LcuOperations, Prop>
>

/**
 * Extract the inner response type from an LCU operation. If the response is `never`, it is coerced to `undefined`.
 *
 * @example
 * ```ts
 * type _unwrap_response_cases = [
 *   Expect<Equal<LcuOperations['PostRiotclientUxShow']['responses']['204'], never>>,
 *   Expect<Equal<UnwrapResponse<'PostRiotclientUxShow'>, undefined>>,
 *   Expect<
 *     Equal<
 *       /// { canStartActivity?: boolean; gameConfig?: { ... }; ... }
 *       UnwrapResponse<'PostLolLobbyV2Lobby'>,
 *       LcuOperations['PostLolLobbyV2Lobby']['responses']['200']['content']['application/json']
 *     >
 *   >
 * ]
 * ```
 */
export type UnwrapResponse<T extends keyof LcuOperationsLens<'responses'>> = {
  [ResponseCode in keyof LcuOperations[T]['responses']]: [
    LcuOperations[T]['responses'][ResponseCode]
  ] extends [never]
    ? undefined
    : LcuOperations[T]['responses'][ResponseCode] extends {
        content:
          | {
              'application/json': infer U
            }
          | {
              'application/json': infer U
            }
      }
    ? U
    : never
}[keyof LcuOperations[T]['responses']]

/**
 * @internal test cases
 */
/* @ts-ignore */
type _unwrap_response_cases = [
  Expect<Equal<LcuOperations['PostRiotclientUxShow']['responses']['204'], never>>,
  Expect<Equal<UnwrapResponse<'PostRiotclientUxShow'>, undefined>>,
  Expect<
    Equal<
      /// { canStartActivity?: boolean; chatRoomName?: string; chatRoomPassword?: string; gameConfig?: { ... }; ... }
      UnwrapResponse<'PostLolLobbyV2Lobby'>,
      LcuOperations['PostLolLobbyV2Lobby']['responses']['200']['content']['application/json']
    >
  >
]

/**
 * Extract the inner parameter type from an LCU operation.
 *
 * @example
 * ```ts
 * type _unwrap_parameters_cases = [
 *   Expect<
 *     Equal<
 *       /// { summonerId: string; }
 *       UnwrapParameters<'PostLolLobbyV2LobbyMembersBySummonerIdGrantInvite'>,
 *       LcuOperations['PostLolLobbyV2LobbyMembersBySummonerIdGrantInvite']['parameters']['path']
 *     >
 *   >,
 *   Expect<
 *     Equal<
 *       /// { messageId: string; }
 *       UnwrapParameters<'DeleteLolSimpleDialogMessagesV1MessagesByMessageId'>,
 *       LcuOperations['DeleteLolSimpleDialogMessagesV1MessagesByMessageId']['parameters']['path']
 *     >
 *   >
 * ]
 * ```
 */
export type UnwrapParameters<T extends keyof LcuOperationsLens<'parameters'>> =
  LcuOperations[T]['parameters'] extends { path: infer U } ? U : never

/**
 * @internal test cases
 */
/* @ts-ignore */
type _unwrap_parameters_cases = [
  Expect<
    Equal<
      /// { summonerId: string; }
      UnwrapParameters<'PostLolLobbyV2LobbyMembersBySummonerIdGrantInvite'>,
      LcuOperations['PostLolLobbyV2LobbyMembersBySummonerIdGrantInvite']['parameters']['path']
    >
  >,
  Expect<
    Equal<
      /// { messageId: string; }
      UnwrapParameters<'DeleteLolSimpleDialogMessagesV1MessagesByMessageId'>,
      LcuOperations['DeleteLolSimpleDialogMessagesV1MessagesByMessageId']['parameters']['path']
    >
  >
]

/**
 * Extract the inner request body type from an LCU operation.
 *
 */
export type UnwrapRequestBody<T extends keyof LcuOperations> = LcuOperations[T] extends {
  requestBody?: {
    content: {
      'application/json': infer R
    }
  }
}
  ? R
  : never

/**
 * @example
 * ```ts
 * type HextechProxy<T> = T &
 *   UnwrapRequest<"getLobby", "GetLolLobbyV2Lobby"> &
 *   UnwrapRequest<"setLobby", "PostLolLobbyV2Lobby"> &
 *   UnwrapRequest<"getNameIsAvailable", "GetLolSummonerV1CheckNameAvailabilityByName">;
 * // =>
 * type HexgateProxy<T> = T & {
 *   getLobby: () => Promise<UnwrapResponse<'GetLolLobbyV2Lobby'>>,
 *   setLobby: (arg: UnwrapRequestBody<'PostLolLobbyV2Lobby'>) => Promise<UnwrapResponse<'PostLolLobbyV2Lobby'>>,
 *   getNameIsAvailable: (arg: UnwrapParameters<'GetLolSummonerV1CheckNameAvailabilityByName'>) => Promise<UnwrapResponse<'GetLolSummonerV1CheckNameAvailabilityByName'>>,
 * }
 * ```
 */
export type UnwrapRequest<
  Alias extends string,
  Op extends keyof LcuOperations
> = Op extends keyof LcuOperationsLens<'parameters'>
  ? {
      [K in Alias]: UnwrapParameters<Op> extends never
        ? () => Promise<UnwrapResponse<Op>>
        : (arg: UnwrapParameters<Op>) => Promise<UnwrapResponse<Op>>
    }
  : {
      [K in Alias]: UnwrapRequestBody<Op> extends never
        ? () => Promise<UnwrapResponse<Op>>
        : (arg: UnwrapRequestBody<Op>) => Promise<UnwrapResponse<Op>>
    }
