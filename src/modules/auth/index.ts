import { CERTIFICATE } from '../../constants/certificate.js'
import type { AuthOptions } from '../../types/tokens.js'
import { getTokens } from './tokens.js'

/**
 * Execute a shell command and extract `AuthTokens` from the League of Legends client process.
 * @throws `InvalidPlatformError` if the platform is not Windows or Linux.
 * @throws `MissingClientError` if any required token is missing, which indicates that the client is not running or cannot be found.
 *
 * @returns `Credentials`
 */
export async function auth<Cert extends string = typeof CERTIFICATE>(options?: AuthOptions<Cert>) {
  const tokens = await getTokens()
  return { ...tokens, certificate: options?.certificate ?? CERTIFICATE }
}
