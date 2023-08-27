import type { AUTH_TOKENS } from '../constants/tokens.js'

/**
 * A union of token IDs that are required for authentication.
 */
export type AuthToken = (typeof AUTH_TOKENS)[number]

/**
 * The tokens extracted from the client process.
 *
 * The certificate is not extracted from the client. It is either provided by the user, or defaults to the public certificate.
 */
export interface AuthTokens {
  appPid: number
  appPort: number
  remotingAuthToken: string
}

/**
 * Options for the `auth` function.
 *
 * By default, the public certificate will be used, but you may provide your own.
 *
 * Alternatively, you can force "unsafe" authentication by explicitly setting `certificate` to `undefined`.
 */
export interface AuthOptions {
  certificate?: string | undefined
}

/**
 * Validated credentials ready to be used for authentication.
 *
 * Without a certificate, "unsafe" authentication will be used.
 */
export interface Credentials extends AuthTokens {
  certificate?: string | undefined
}
