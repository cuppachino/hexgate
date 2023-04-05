/// --- Polyfills ---------------------------------------------------------------
/// Fetch (node-fetch)
import './utils/pollyfills/fetch.js'
export * from './utils/pollyfills/fetch.js'

/// --- Public Modules ----------------------------------------------------------
/// Authentication
export { createHeaders } from './modules/auth/headers.js'
export { auth } from './modules/auth/index.js'

/// Hexgate
export * from './modules/hexgate/index.js'

/// HTTPS
export { HttpsAgent } from './modules/https/agent.js'
export { createRequestInit } from './modules/https/request-init.js'

/// Utilities
export { poll } from './utils/poll.js'

/// Errors
export { HexgateError } from './errors/index.js'
export { InvalidPlatformError } from './errors/invalid-platform.js'
export { MissingClientError } from './errors/missing-client.js'
export { PollTimeoutError } from './errors/poll-timeout.js'

/// --- Public Types ------------------------------------------------------------
/// Authentication Types
export type { AuthOptions, AuthToken, Credentials } from './types/tokens.js'

/// Error Types
export type { ErrorKind } from './types/errors.js'

/// Hexgate Types
export type {
  OptionalEmptyArg,
  RequiredEmptyArg,
  HexgateBuild,
  HexgateFetcher,
  HexgateCreate
} from './types/hexgate/fetcher.js'

/// Game Constant Types
export type * from './types/game-constants/gameModes.js'
export type * from './types/game-constants/gameTypes.js'
export type * from './types/game-constants/maps.js'
export type * from './types/game-constants/queues.js'
export type * from './types/game-constants/seasons.js'

/// DTO Types
export type * from './types/dto/game-server-region.js'

/// OpenAPI Types
export type {
  LcuComponents,
  LcuOperations,
  LcuOperationsLens,
  LcuPaths,
  LcuResponseCode,
  UnwrapResponse,
  UnwrapRequestBody,
  UnwrapParameters,
  UnwrapRequest
} from './types/openapi/index.js'
