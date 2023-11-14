import type { Combine } from '@cuppachino/type-space'
import { AUTH_TOKENS } from '../../constants/tokens.js'
import { InvalidPlatformError } from '../../errors/invalid-platform.js'
import { MissingClientError } from '../../errors/missing-client.js'
import type { AuthTokens, Credentials } from '../../types/tokens.js'
import { execPromise } from '../../utils/exec-promise.js'
import { stripWhitespace } from '../../utils/strip-whitespace.js'

/**
 * Asserts that all required tokens are present.
 * @param tokens The tokens to check.
 * @throws An error if any required token is missing.
 */
function assertTokens(
  tokens: Partial<AuthTokens> | undefined
): asserts tokens is AuthTokens {
  for (const token of AUTH_TOKENS) {
    if (token === 'certificate') continue
    if (!tokens?.[token]) throw new MissingClientError()
  }
}

/**
 * Get the command-line arguments of the running League of Legends client.
 * @throws `InvalidPlatformError` if the platform is not Windows, MacOS, or Linux.
 * @returns a string or buffer containing the output of the command.
 *
 * @example
 * ```ts
 * const rawTokens = await execTokens()
 * ```
 */
async function execTokens() {
  const PS1 = `Get-CimInstance -className Win32_Process | Where-Object Name -Like "LeagueClientUx*" | Select-Object CommandLine | Format-List`
  const DARWIN = `ps -A | grep LeagueClientUx`
  const BASH = `ps -Af | grep LeagueClient.ex`
  const args: Parameters<typeof execPromise> = process.platform === 'win32' ? [PS1, { shell: 'powershell' }] : process.platform === 'darwin' ? [DARWIN] : [BASH]

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
): Combine<Partial<Omit<Credentials, 'certificate'>>>[] {
  return stripWhitespace(String(processArgs))
    .split(
      process.platform === 'win32' ? 'CommandLine' : process.platform === 'darwin' ? '??' : '?'
    )
    .filter(Boolean)
    .map((args) => ({
      appPid: Number(args.match(/--app-pid=([0-9]+)/)?.[1]),
      appPort: Number(args.match(/--app-port=([0-9]+)/)?.[1]),
      remotingAuthToken: args.match(/--remoting-auth-token=([\w-]+)/)?.[1]
    }))
}

/**
 * Get the auth tokens from the League of Legends client process.
 * @throws `InvalidPlatformError` if the platform is not supported.
 * @throws `MissingClientError` if a client could not be found.
 * @returns `Promise<AuthTokens[]>` of all clients.
 */
export async function getTokens() {
  const authTokens = parseTokens(await execTokens()).reduce((acc, tokens) => {
    try {
      assertTokens(tokens)
      acc.push(tokens)
    } catch { }
    return acc
  }, [] as AuthTokens[])
  assertTokens(authTokens[0])
  return authTokens
}
