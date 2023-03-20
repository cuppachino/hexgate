import type { PartialSome } from '@cuppachino/type-space'
import type { CERTIFICATE } from '../constants/certificate.js'
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
export type AuthTokens = Omit<Credentials, 'certificate'>

/**
 * Options for the `auth` function.
 *
 * By default, the public certificate will be used, but you may provide your own.
 *
 * Alternatively, you can force "unsafe" authentication by explicitly setting `certificate` to `undefined`.
 */
export type AuthOptions<Cert extends string | undefined = typeof CERTIFICATE> = {
  certificate?: Cert
}

/**
 * Validated credentials ready to be used for authentication.
 *
 * Without a certificate, "unsafe" authentication will be used.
 */
export type Credentials = PartialSome<
  {
    [Token in AuthToken]: Token extends 'appPid' | 'appPort' ? number : string
  },
  'certificate'
>
