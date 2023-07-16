import type { RequestInit, Response } from 'node-fetch-commonjs'
import type { Credentials } from '../../types/tokens.js'
import { createHexgate } from '../hexgate/create.js'
import type { Hexgate } from '../hexgate/index.js'
import type { createRecipe } from '../hexgate/recipe.js'
import { createRequestInit } from '../https/request-init.js'
import { Observable } from '../../utils/observable.js'

export type StatusUpdate =
  | {
      status: 'disconnected' | 'connecting'
      connected: false
      credentials: undefined
    }
  | {
      status: 'connecting'
      connected: false
      credentials: undefined
    }
  | {
      status: 'connected'
      connected: true
      credentials: Credentials
    }

export class Runner<T extends ReturnType<typeof createRecipe>> {
  #status: StatusUpdate['status']
  #connected: Observable<boolean>
  #credentials: Credentials | undefined
  #init: RequestInit | undefined
  #hexgate: Hexgate | undefined
  #recipe: T
  #cookbook: ReturnType<T> | undefined

  get status() {
    return this.#status
  }

  get connected() {
    return this.#connected.value
  }

  get credentials() {
    return this.#credentials
  }

  constructor(recipe: T) {
    this.#recipe = recipe
    this.#connected = new Observable(false)
    this.#status = 'disconnected'
  }

  update = (status: StatusUpdate) => {
    if (status.connected) {
      this.#hexgate = createHexgate(status.credentials)
      this.#init = createRequestInit(status.credentials)
      this.#cookbook = this.#recipe(this.#hexgate) as ReturnType<T>
    } else {
      this.#hexgate = undefined
      this.#init = undefined
      this.#cookbook = undefined
    }
    this.#status = status.status
    this.#credentials = status.credentials
    this.#connected.value = status.connected
  }

  run = async <P>(
    fn: ({
      hexgate,
      hx,
      hfetch
    }: {
      hexgate: Hexgate
      hx: ReturnType<T>
      hfetch: (url: string) => Promise<Response>
    }) => P
  ): Promise<P> => {
    return new Promise((resolve) => {
      const resolvePromise = () =>
        resolve(
          fn({
            hexgate: this.#hexgate!,
            hx: this.#cookbook!,
            hfetch: this.#hexfetch
          })
        )

      if (this.connected) {
        resolvePromise()
      } else {
        const unsubscribe = this.#connected.subscribe((connected, prev) => {
          if (connected && !prev) {
            unsubscribe()
            resolvePromise()
          }
        })
      }
    })
  }

  #hexfetch = async (url: string) => {
    if (!this.connected || !this.#credentials) {
      throw new Error('Cannot fetch from LCU while disconnected')
    }
    // @ts-ignore
    return fetch(`${this.#hexgate?.baseUrl}${url}`, this.#init)
  }
}
