import type { Middleware } from '@cuppachino/openapi-fetch'
import type { HexgateBuild, HexgateFetcher } from '../../types/hexgate/fetcher.js'
import type { Credentials } from '../../types/tokens.js'
import { hexgateForLcu } from './fetcher.js'
import { createRequestInit } from '../https/request-init.js'
import { BaseUrl } from 'src/structs/base-url.js'

export class Hexgate {
  protected static forLcu: () => HexgateFetcher = hexgateForLcu
  protected lcu: HexgateFetcher
  public baseUrl: BaseUrl

  constructor(credentials: Credentials) {
    this.baseUrl = BaseUrl(credentials.appPort)
    this.lcu = Hexgate.forLcu()
    this.lcu.configure({
      baseUrl: this.baseUrl,
      init: createRequestInit(credentials)
    })
  }

  /**
   * Build a request function for an LCU path and one of its methods.
   * @param path The path to build a request function for.
   */
  public build: HexgateBuild = (path) => this.lcu.path(path)

  /**
   * Add a middleware to the Hexgate instance.
   * @todo hexgate doesn't have any middleware tricks yet.
   */
  public use = (mw: Middleware) => this.lcu.use(mw)
}

/** Create a new Hexgate instance */
export function createHexgate(credentials: Credentials) {
  return new Hexgate(credentials)
}
