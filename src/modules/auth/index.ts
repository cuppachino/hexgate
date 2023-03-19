import { CERTIFICATE } from 'hexgate/constants/certificate.js'
import type { AuthOptions } from 'hexgate/types/tokens.js'
import { getTokens } from './tokens.js'

/**
 * Execute a shell command and extract `AuthTokens` from the League of Legends client process.
 * @throws `InvalidPlatformError` if the platform is not Windows or Linux.
 * @throws `MissingClientError` if any required token is missing.
 *
 * @returns `Credentials`
 */
export async function auth<Cert extends string = typeof CERTIFICATE>(options?: AuthOptions<Cert>) {
  const tokens = await getTokens()
  return { ...tokens, certificate: options?.certificate ?? CERTIFICATE }
}
