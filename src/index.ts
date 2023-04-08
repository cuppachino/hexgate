/// --- Polyfills ---------------------------------------------------------------
/// Fetch (node-fetch)
import './utils/pollyfills/fetch.js'
export * from './utils/pollyfills/fetch.js'

/// --- Public Modules ----------------------------------------------------------
/// Authentication
export { createHeaders } from './modules/auth/headers.js'
export { auth } from './modules/auth/index.js'

/// Hexgate
export { Hexgate } from './modules/hexgate/index.js'
export { createHexgate } from './modules/hexgate/create.js'
export { createRecipe } from './modules/hexgate/recipe.js'
export {
  extractHexgateSymbol,
  hexgateSymbol
} from './modules/hexgate/symbol.js'

/// HTTPS
export { HttpsAgent } from './modules/https/agent.js'
export { createRequestInit } from './modules/https/request-init.js'

/// Utilities
export { extractData } from './utils/extract-data.js'
export { identity } from './utils/identity.js'
export { mapDefined } from './utils/map-defined.js'
export { poll } from './utils/poll.js'
export { proxyFunction } from './utils/proxy-function.js'
export { proxyFlyweight } from './utils/proxy-flyweight.js'

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
  HexgateBuild,
  HexgateCreate,
  HexgateFetcher,
  OptionalEmptyArg,
  RequiredEmptyArg
} from './types/hexgate/fetcher.js'

/// Game Constant Types
export type * from './types/game-constants/gameModes.js'
export type * from './types/game-constants/gameTypes.js'
export type * from './types/game-constants/maps.js'
export type * from './types/game-constants/queues.js'
export type * from './types/game-constants/seasons.js'

/// DTO Types
export type { GameServerRegion } from './types/dto/game-server-region.js'
export type { LcuResponseCode } from './types/dto/lcu-response-code.js'

/// OpenAPI Types
export type { LcuComponents } from './types/openapi/components.js'
export type { LcuOperations } from './types/openapi/operations.js'
export type { LcuPaths } from './types/openapi/paths.js'

export type {
  Operation,
  OperationParameters,
  OperationResponses
} from './types/hexgate/operation.js'

export type { ApiResponse } from '@cuppachino/openapi-fetch'
