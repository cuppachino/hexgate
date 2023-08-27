import { CERTIFICATE } from '../../constants/certificate.js'
import type { AuthOptions, Credentials } from '../../types/tokens.js'
import { getTokens } from './tokens.js'

/**
 * Execute a shell command and extract `AuthTokens` from the League of Legends client process.
 * @throws `InvalidPlatformError` if the platform is not Windows, MacOS, or Linux.
 * @throws `MissingClientError` if any required token is missing, which indicates that the client is not running or cannot be found.
 *
 * @returns `Promise<Credentials>`
 */
export async function auth(): Promise<Credentials>
/**
 * Execute a shell command and extract `AuthTokens` from the League of Legends client process.
 * @throws `InvalidPlatformError` if the platform is not Windows, MacOS, or Linux.
 * @throws `MissingClientError` if any required token is missing, which indicates that the client is not running or cannot be found.
 *
 * @returns `Promise<Credentials>`
 */
export async function auth(
  options?: AuthOptions & { all?: undefined }
): Promise<Credentials>
/**
 * Execute a shell command and extract `AuthTokens` from all League of Legends client processes.
 * @throws `InvalidPlatformError` if the platform is not Windows, MacOS, or Linux.
 * @throws `MissingClientError` if any required token is missing from all found clients, which indicates that the client is not running, cannot be found, or is being modified by another process.
 *
 * @returns `Promise<Credentials[]>`
 */
export async function auth(
  options?: AuthOptions & { all: true }
): Promise<Credentials[]>
export async function auth(
  options?: AuthOptions & ({ all: true } | { all?: undefined })
): Promise<Credentials | Credentials[]> {
  const tokenList = (await getTokens()).map((tokens) => ({
    ...tokens,
    certificate: options?.certificate || CERTIFICATE
  }))

  if (!options?.all) {
    return tokenList[0]
  } else {
    return tokenList
  }
}
