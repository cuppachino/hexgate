import type { Credentials } from 'hexgate/types/tokens.js'

/**
 * The tokens extracted from the client process to be used for authentication.
 */
export const AUTH_TOKENS = ['appPid', 'appPort', 'remotingAuthToken', 'certificate'] as const

/**
 * Asserts that all required tokens are present.
 * @param tokens The tokens to check.
 * @throws An error if any required token is missing.
 */
export function assertTokens(tokens: Partial<Credentials>) {
  for (const token of AUTH_TOKENS) {
    if (token === 'certificate') continue
    if (!tokens[token]) throw new Error(`Missing token: ${token}`)
  }
}
