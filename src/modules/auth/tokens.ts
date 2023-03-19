import type { Combine } from '@cuppachino/type-space'
import { InvalidPlatformError } from 'hexgate/errors/invalid-platform.js'
import { MissingClientError } from 'hexgate/errors/missing-client.js'
import type { AuthTokens, Credentials } from 'hexgate/types/tokens.js'
import { execPromise } from 'hexgate/utils/exec-promise.js'
import { stripWhitespace } from 'hexgate/utils/strip-whitespace.js'

/**
 * The tokens extracted from the client process to be used for authentication.
 */
export const AUTH_TOKENS = ['appPid', 'appPort', 'remotingAuthToken', 'certificate'] as const

/**
 * Asserts that all required tokens are present.
 * @param tokens The tokens to check.
 * @throws An error if any required token is missing.
 */
function assertTokens(tokens: Partial<AuthTokens>): asserts tokens is AuthTokens {
  for (const token of AUTH_TOKENS) {
    if (token === 'certificate') continue
    if (!tokens[token]) throw new MissingClientError()
  }
}

/**
 * Get the command-line arguments of the running League of Legends client.
 * @throws `InvalidPlatformError` if the platform is not Windows or Linux.
 * @returns a string or buffer containing the output of the command.
 *
 * @example
 * ```ts
 * const rawTokens = await execTokens()
 * ```
 */
async function execTokens() {
  const BASH = `ps -A | grep LeagueClientUx`
  const PS1 = `Get-CimInstance -className Win32_Process | Where-Object Name -Like "LeagueClientUx*" | Select-Object CommandLine -First 1 | Format-List`
  const args: Parameters<typeof execPromise> =
    process.platform === 'win32' ? [PS1, { shell: 'powershell' }] : [BASH]

  try {
    return (await execPromise(...args)).stdout
  } catch {
    throw new InvalidPlatformError()
  }
}

/**
 * Regextract auth tokens from the League of Legends client process arguments.
 *
 * @returns `Credentials`, may be undefined or partially undefined.
 */
function parseTokens(
  processArgs: Buffer | string
): Combine<Partial<Omit<Credentials, 'certificate'>>> {
  const args = stripWhitespace(String(processArgs))
  const match = (regex: RegExp) => args.match(regex)?.[1]

  return {
    appPid: Number(match(/--app-pid=([0-9]+)/)),
    appPort: Number(match(/--app-port=([0-9]+)/)),
    remotingAuthToken: match(/--remoting-auth-token=([\w-]+)/)
  }
}

/**
 * Get the auth tokens from the League of Legends client process.
 * @throws `InvalidPlatformError` if the platform is not Windows or Linux.
 * @throws `MissingClientError` if any required token is missing.
 * @returns `Credentials`, may be undefined or partially undefined.
 */
export async function getTokens() {
  const tokens = parseTokens(await execTokens())
  assertTokens(tokens)
  return tokens
}
