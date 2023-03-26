/// Public Modules
export { auth } from './modules/auth/index.js'

/// Public Utils
export { poll } from './utils/poll.js'

/// Authentication Types
export type { AuthOptions, AuthToken, Credentials } from './types/tokens.js'

/// Errors
export { HexgateError } from './errors/index.js'
export { InvalidPlatformError } from './errors/invalid-platform.js'
export { MissingClientError } from './errors/missing-client.js'
export { PollTimeoutError } from './errors/poll-timeout.js'

/// Error Types
export type { ErrorKind } from './types/errors.js'

/// OpenAPI Types
export type {
  LcuComponents,
  LcuOperations,
  LcuOperationsLens,
  LcuPaths,
  LcuResponseCode,
  UnwrapResponse
} from './types/openapi/index.js'
