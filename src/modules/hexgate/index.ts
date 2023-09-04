import type { Middleware } from '@cuppachino/openapi-fetch'
import { Fetcher } from '@cuppachino/openapi-fetch'
import type {
  HexgateBuild,
  HexgateFetcher
} from '../../types/hexgate/fetcher.js'
import type { LcuPaths } from '../../types/openapi/paths.js'
import type { Credentials } from '../../types/tokens.js'
import { baseUrl } from '../../utils/base-url.js'
import { createRequestInit } from '../https/request-init.js'
import { hexgateSymbol } from './symbol.js'

/**
 * The main Hexgate class.
 *
 * @param credentials The `Credentials` object to use for requests.
 *
 * @example
 * ```ts
 * import { auth, poll, Hexgate } from 'hexgate'
 *
 * const credentials = await auth()
 * const hexgate = new Hexgate(credentials)
 *
 * const getSummonersByName = hexgate
 *   .build('/lol-summoner/v2/summoners/names')
 *   .method('post')
 *   .create()
 *
 * const summoners = await getSummonersByName(['dubbleignite'])
 * console.table(summoners)
 * ```
 */
export class Hexgate {
  /**
   * The base URL constructed from the credentials.
   */
  public baseUrl: ReturnType<typeof baseUrl>

  /**
   * The internal hexgate symbol used to identify the instance.
   */
  protected readonly [hexgateSymbol]: symbol

  constructor(credentials: Credentials) {
    this[hexgateSymbol] = Symbol('internal hexgate instance symbol')
    this.baseUrl = baseUrl(credentials.appPort)
    this.lcu = Hexgate.forLcu()
    this.lcu.configure({
      baseUrl: this.baseUrl,
      init: createRequestInit(credentials)
    })
  }

  /**
   * Build a request function for an LCU path and one of its methods.
   * @param path The path to build a request function for.
   *
   * @example
   * ```ts
   * const getSummonersByName = hexgate
   *   .build('/lol-summoner/v2/summoners/names')
   *   .method('post')
   *   .create()
   *
   * const summoners = await getSummonersByName(['dubbleignite'])
   * console.table(summoners)
   * ```
   */
  public build: HexgateBuild = (path) => this.lcu.path(path)

  /**
   * Add a middleware to the Hexgate instance.
   * @todo hexgate doesn't have any middleware tricks yet.
   */
  public use = (mw: Middleware) => this.lcu.use(mw)

  /**
   * Internal wrapper for `Fetcher.for<LcuPaths>`
   * @internal
   */
  protected static forLcu =
    Fetcher.for<LcuPaths> as unknown as () => HexgateFetcher

  /**
   * Internal fetcher
   * @internal
   */
  protected lcu: HexgateFetcher
}

export default Hexgate

export * from './create.js'
export * from './symbol.js'
