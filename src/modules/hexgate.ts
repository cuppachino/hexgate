import { Fetcher, type Middleware } from '@cuppachino/openapi-fetch'
import type { HexgatePath } from '../types/hexgate.js'
import type { LcuPaths } from '../types/openapi/index.js'
import type { Credentials } from '../types/tokens.js'
import { createRequestInit } from './https/request-init.js'

export class Hexgate {
  constructor(credentials: Credentials) {
    const { appPort: port } = credentials

    this.baseUrl = `https://127.0.0.1:${port}`
    this.fetcher = Fetcher.for<LcuPaths>()
    this.fetcher.configure({
      baseUrl: this.baseUrl,
      init: createRequestInit(credentials)
    })
  }
  public baseUrl: `https://127.0.0.1:${Credentials['appPort']}`
  protected fetcher = Fetcher.for<LcuPaths>()

  /** */
  public use(mw: Middleware) {
    return this.fetcher.use(mw)
  }

  /** */
  public build<P extends keyof LcuPaths>(path: P): HexgatePath<P> {
    return this.fetcher.path(path) as any
  }
}

/** Create a new Hexgate instance */
export function createHexgate(credentials: Credentials) {
  return new Hexgate(credentials)
}
