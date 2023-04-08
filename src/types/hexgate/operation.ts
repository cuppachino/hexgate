import type { RequestInit } from 'node-fetch-commonjs'
import type { LcuOperations } from '../openapi/operations.js'
import type {
  ExtractRequestBody,
  ExtractRequestParams,
  ExtractRequestResponses,
  OperationWith
} from './operation.internal.js'

/**
 * Infer the parameters and requestBody type from an operation.
 * This is useful for generating the argument type of a request function.
 *
 * @example
 * ```ts
 * async function getLobby <T extends Hexgate>(hexgate: T, arg: OperationParameters<'GetLolLobbyV2Lobby'>) {
 *   return await hexgate.build("/lol-lobby/v2/lobby").method("get").create()(arg)
 * }
 * ```
 */
export type OperationParameters<Op extends keyof LcuOperations> =
  (LcuOperations[Op] extends OperationWith['parameters']
    ? ExtractRequestParams<LcuOperations[Op]>
    : {}) &
    (LcuOperations[Op] extends OperationWith['requestBody']
      ? ExtractRequestBody<LcuOperations[Op]>
      : {})

/**
 * Infer the response type from an LCU operation.
 * This is useful for building function return types from response types.
 *
 * @example
 * ```ts
 * declare function getOwnedChampions (...): Promise<
 *   NonNullable<
 *     ArrayItem<OperationResponses<'GetLolChampionsV1OwnedChampionsMinimal'>>
 *   >[]
 * >
 * ```
 */
export type OperationResponses<Op extends keyof LcuOperations> =
  LcuOperations[Op] extends OperationWith['responses']
    ? ExtractRequestResponses<LcuOperations[Op]>
    : {}

/**
 * Constructs a function signature for an LCU operation.
 * This is a useful utility type for when wrapping Hexgate's `build(_).method(_).create()` pattern.
 *
 * @example
 * ```ts
 * type Lobby = Awaited<ReturnType<Operation<'GetLolLobbyV2Lobby'>>>
 * declare const getLobby: Operation<'GetLolLobbyV2Lobby'>
 * const lobby = await getLobby({})
 * ```
 */
export type Operation<Alias extends keyof LcuOperations> =
  OperationParameters<Alias> extends Record<string, never>
    ? (
        arg?: OperationParameters<Alias>,
        init?: RequestInit
      ) => Promise<OperationResponses<Alias>>
    : (
        arg: OperationParameters<Alias>,
        init?: RequestInit
      ) => Promise<OperationResponses<Alias>>
