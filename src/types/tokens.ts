import type { PartialSome } from '@cuppachino/type-space'
import type { AUTH_TOKENS } from 'hexgate/modules/auth/tokens.js'

/**
 * A union of token IDs that are required for authentication.
 */
export type AuthToken = typeof AUTH_TOKENS[number]

/**
 * A map of token IDs to their types.
 */
export type Credentials = PartialSome<
  {
    [Token in AuthToken]: Token extends 'appPid' | 'appPort' ? number : string
  },
  'certificate'
>
