import type { PhantomError } from 'src/types/phantom.js'
import type { BaseLogger } from '../../types/base-logger.js'
import type { RecipeApi, RecipeFn } from '../../types/hexgate/recipe.js'
import type { Credentials } from '../../types/tokens.js'
import { extractDefined } from '../../utils/extract-defined.js'
import { Heartbeat } from '../../utils/heartbeat.js'
import { Observable } from '../../utils/observable.js'
import { poll } from '../../utils/poll.js'
import { auth } from '../auth/index.js'
import { Hexgate as HttpsClient } from '../hexgate/index.js'
import { createRecipe } from '../hexgate/recipe.js'
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

export type ConnectionMethods<Logger extends BaseLogger, Recipe> = {
  onConnect: (con: SafeConnection<Logger, Recipe>) => void
  onDisconnect: (discon: Connection<Logger, Recipe>) => void
  onStatusChange: (status: ConnectionStatus, prev: ConnectionStatus) => void
} & (
  | ({
      createRecipe({ build, wrap, unwrap, once, result }: RecipeApi): Recipe
    } & {
      recipe: PhantomError<
        never,
        'createRecipe is already defined. You may choose between createRecipe and recipe, but you cannot use both.'
      >
    })
  | ({
      recipe: RecipeFn<Recipe>
    } & {
      createRecipe: PhantomError<
        never,
        'recipe is already defined. You may choose between createRecipe and recipe, but you cannot use both.'
      >
    })
)

export type ConnectionConfig<
  Logger extends BaseLogger | undefined,
  Recipe
> = ConnectionOptions<Logger> & ConnectionMethods<ResolveLogger<Logger>, Recipe>

export interface SafeConnection<Logger extends BaseLogger | undefined, Recipe>
  extends Connection<Logger, Recipe> {
  ws: NonNullable<Connection<Logger, Recipe>['ws']>
  https: NonNullable<Connection<Logger, Recipe>['https']>
  credentials: NonNullable<Connection<Logger, Recipe>['credentials']>
}

export class Connection<Logger extends BaseLogger | undefined, Recipe = {}> {
  #options: ConnectionOptions<ResolveLogger<Logger>> &
    Partial<ConnectionMethods<ResolveLogger<Logger>, Recipe>> = {
    interval: 1500,
    logger: console as ResolveLogger<Logger>
  }
  status = new Observable<ConnectionStatus>('disconnected')
  credentials: Credentials | null = null
  https: HttpsClient | null = null
  ws: WsClient | null = null
  recipe: Recipe = {} as Recipe

  get #recipe() {
    return this.#options.recipe as RecipeFn<Recipe> | undefined
  }

  get logger() {
    return this.#options.logger
  }

  constructor(options?: Partial<ConnectionConfig<Logger, Recipe>>) {
    Object.assign(this.#options, extractDefined(options))
    if (this.#options.createRecipe instanceof Function) {
      this.#options.recipe = createRecipe<HttpsClient, Recipe>(
        this.#options.createRecipe
      )
    }
    this.status.subscribe((status, prev) => {
      if (status !== prev) {
        options?.onStatusChange?.(status, prev)
        if (status === 'connected' && prev !== 'connected' && this.isOk()) {
          this.#options.onConnect?.(this)
        }
        if (status === 'disconnected' && prev !== 'disconnected') {
          this.#options.onDisconnect?.(
            this as this & Connection<ResolveLogger<Logger>, Recipe>
          )
        }
      }
    })
  }

  async connect() {
    try {
      const credentials = await poll<Credentials>(
        auth,
        this.#options.interval,
        undefined
      )
      this.#options.logger.debug(this.credentials, 'credentials')
      this.update(credentials)
    } catch (e) {
      this.update()
      this.#options.logger.error(e)
    }
    return this
  }

  isOk(): this is SafeConnection<ResolveLogger<Logger>, Recipe> {
    return !!this.ws && !!this.https && !!this.credentials
  }

  ok(): SafeConnection<ResolveLogger<Logger>, Recipe> | undefined {
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
      this.recipe = this.#recipe?.(this.https) ?? ({} as Recipe)
      this.#ping = Connection.#pingWith(this.https)
      this.#heartbeat.start()
    } else {
      this.status.value = 'disconnected'
      this.credentials = null
      this.https = null
      this.#ping = null
      this.ws = null
      this.#heartbeat.stop()
    }
  }

  static #pingWith: RecipeFn<() => Promise<{ ok: boolean }>> = createRecipe(
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
