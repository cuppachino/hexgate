import type { Update } from '../../types/update.js'
import type { BaseLogger } from '../../types/base-logger.js'

import type { Credentials } from '../../types/tokens.js'
import { extractDefined } from '../../utils/extract-defined.js'
import { Heartbeat } from '../../utils/heartbeat.js'
import { Observable } from '../../utils/observable.js'
import { poll } from '../../utils/poll.js'
import { auth } from '../auth/index.js'
import { Hexgate as HttpsClient } from '../hexgate/index.js'
import type { RecipeApi } from '../recipe/api.js'
import { createRecipe, type Recipe } from '../recipe/index.js'
import { LcuClient as WsClient } from '../websocket/index.js'

export type ResolveLogger<T extends BaseLogger | undefined> =
  undefined extends T ? Console : NonNullable<T>

export type ConnectionStatus = 'disconnected' | 'connected' | 'connecting'

export interface ConnectionOptions<Logger extends BaseLogger | undefined> {
  /**
   * @default 1500 ms
   */
  interval: number
  /**
   * @default Console
   */
  logger: Logger
}

export type ConnectionMethods<Logger extends BaseLogger, R> = {
  onConnect: (con: SafeConnection<Logger, R>) => void
  onDisconnect: (discon: UnsafeConnection<Logger, R>) => void
  onStatusChange: (status: ConnectionStatus, prev: ConnectionStatus) => void
} & (
  | {
      createRecipe({ build, wrap, to, unwrap, ...api }: RecipeApi): R
      recipe: 'createRecipe is already defined. You may choose between createRecipe and recipe, but you cannot use both.'
    }
  | {
      recipe: Recipe<R>
      createRecipe: 'recipe is already defined. You may choose between createRecipe and recipe, but you cannot use both.'
    }
)

export type ConnectionConfig<
  Logger extends BaseLogger | undefined,
  R
> = ConnectionOptions<Logger> & ConnectionMethods<ResolveLogger<Logger>, R>

export interface SafeConnection<Logger extends BaseLogger | undefined, R>
  extends Connection<Logger, R> {
  ws: NonNullable<Connection<Logger, R>['ws']>
  https: NonNullable<Connection<Logger, R>['https']>
  credentials: NonNullable<Connection<Logger, R>['credentials']>
  recipe: NonNullable<R>
}

export interface UnsafeConnection<Logger extends BaseLogger | undefined, R>
  extends Connection<Logger, R> {
  ws: null
  https: null
  credentials: null
  recipe: null
}

export class Connection<Logger extends BaseLogger | undefined, R = null>
  implements Update<SafeConnection<ResolveLogger<Logger>, R>, Credentials>
{
  #options: ConnectionOptions<ResolveLogger<Logger>> &
    Partial<ConnectionMethods<ResolveLogger<Logger>, R>> = {
    interval: 1500,
    logger: console as ResolveLogger<Logger>
  }
  status = new Observable<ConnectionStatus>('disconnected')
  credentials: Credentials | null = null
  https: HttpsClient | null = null
  ws: WsClient | null = null
  recipe: R | null = null

  get #recipe() {
    return this.#options.recipe as Recipe<R> | undefined
  }

  get logger() {
    return this.#options.logger
  }

  constructor(options?: Partial<ConnectionConfig<Logger, R>>) {
    Object.assign(this.#options, extractDefined(options))
    if (this.#options.createRecipe instanceof Function) {
      this.#options.recipe = createRecipe(this.#options.createRecipe)
    }
    this.status.subscribe((status, prev) => {
      if (status !== prev) {
        options?.onStatusChange?.(status, prev)
        if (status === 'connected' && prev !== 'connected' && this.isOk()) {
          this.#options.onConnect?.(this)
        }
        if (status === 'disconnected' && prev !== 'disconnected') {
          this.#options.onDisconnect?.(
            this as this & UnsafeConnection<ResolveLogger<Logger>, R>
          )
        }
      }
    })
  }

  async connect() {
    try {
      const credentials = await poll(auth, this.#options.interval, undefined)
      this.#options.logger.debug(this.credentials, 'credentials')
      this.update(credentials)
    } catch (e) {
      this.update()
      this.#options.logger.error(e)
    }
    return this
  }

  isOk(): this is this & SafeConnection<ResolveLogger<Logger>, R> {
    return !!this.ws && !!this.https && !!this.credentials
  }

  ok() {
    if (this.isOk()) {
      return this
    }
    return undefined
  }

  update(credentials?: Credentials | null) {
    if (credentials) {
      this.status.value = 'connecting'
      this.credentials = credentials
      this.https = new HttpsClient(credentials)
      this.recipe = this.#recipe?.(this.https) ?? null
      this.#ping = Connection.#pingWith(this.https)
      this.#heartbeat.start()
    } else {
      this.status.value = 'disconnected'
      this.credentials = null
      this.https = null
      this.recipe = null
      this.#ping = null
      this.ws = null
      this.#heartbeat.stop()
    }
  }

  static #pingWith: Recipe<() => Promise<{ ok: boolean }>> = createRecipe(
    ({ build }) =>
      build('/lol-summoner/v1/current-summoner').method('get').create()
  )
  #ping: (() => Promise<{ ok: boolean }>) | null = null
  #heartbeat = new Heartbeat(async () => {
    try {
      const isOk = (await this.#ping?.())?.ok
      if (isOk && this.status.value !== 'connected') {
        this.ws = new WsClient(this.credentials!)
          .on('close', () => this.update())
          .on('open', () => {
            this.status.value = 'connected'
            this.#heartbeat.stop()
          })
      } else {
        this.update()
        this.#heartbeat.stop()
      }
    } catch (e) {
      this.update()
      this.#heartbeat.stop()
    }
  }, this.#options.interval)
}

export default Connection

export * from './lcu-value.js'
