import type { ClientRequestArgs } from 'http'
import WebSocket from 'ws'
import type { Credentials } from '../../types/tokens.js'
import { createHeaders } from '../auth/headers.js'
import type {
  LcuEvent,
  LcuEventLookup
} from '../../types/dto/lcu-event-lookup.js'
import type { LobbyEvent } from 'src/index.js'

type RecordToCallbacks<T> = {
  [K in keyof T]: ({
    data,
    eventType,
    uri
  }: {
    data: T[K]
    eventType: 'Update' | 'Create' | 'Delete'
    uri: string
  }) => void
}

type LcuWebSocketEventCallbacks = Omit<
  RecordToCallbacks<LcuEventLookup>,
  'OnJsonApiEvent_lol-lobby_v2_lobby'
> & {
  'OnJsonApiEvent_lol-lobby_v2_lobby': (event: LobbyEvent) => void
}

export interface ILcuClient {
  eventListeners: Partial<
    Record<LcuEvent, Array<LcuWebSocketEventCallbacks[LcuEvent]>>
  >
  subscribe<T extends LcuEvent>(
    event: T,
    callback: LcuWebSocketEventCallbacks[T]
  ): void
  unsubscribe<T extends LcuEvent>(
    event: T,
    callback: LcuWebSocketEventCallbacks[T]
  ): void
  unsubscribeAll(event?: LcuEvent): void
}

export class LcuClient extends WebSocket implements ILcuClient {
  eventListeners: Partial<
    Record<LcuEvent, Array<LcuWebSocketEventCallbacks[LcuEvent]>>
  > = {}

  constructor(credentials: Credentials) {
    const url = `wss://127.0.0.1:${credentials.appPort}/`
    const options = {
      headers: createHeaders(credentials),
      rejectUnauthorized: credentials.certificate ? true : false,
      ca: credentials.certificate
    } satisfies WebSocket.ClientOptions | ClientRequestArgs | undefined
    super(url, options)

    this.eventListeners = {}
    this.addListener('message', this.publish.bind(this))
  }

  private publish(data: WebSocket.RawData) {
    const [eventCode, eventType, eventData] = (() => {
      try {
        const json = JSON.parse(data.toString())
        if (json[0] === 8) {
          return json as any as [
            8,
            LcuEvent,
            any
            // ! This is looks like a bug with TypeScript. The type collapses to `never` and locks up the TS server, so I'm using `any` instead.
            // ! I noticed this speeds up inference for `data` in `subscribe` by a lot.
          ]
        }
      } catch (error) {
        // console.error(error)
      }
      return [0, undefined, undefined] as [0, undefined, undefined]
    })()

    if (eventCode) {
      const listeners = this.eventListeners[eventType]
      if (listeners) {
        listeners.forEach((listener) => listener(eventData))
      }
    }
  }

  subscribe<T extends keyof LcuEventLookup>(
    event: T,
    listener: LcuWebSocketEventCallbacks[T]
  ) {
    const isOpen = this.readyState === WebSocket.OPEN
    if (!isOpen) {
      this.once('open', () => this.subscribe(event, listener))
      return
    }

    this.send(JSON.stringify([5, event]))
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = []
    }
    this.eventListeners[event]?.push(listener)
  }

  unsubscribe(event: LcuEvent) {
    this.eventListeners[event] = undefined
    if (this.readyState !== WebSocket.OPEN) return
    this.send(JSON.stringify([6, event]))
  }

  unsubscribeAll(event?: LcuEvent) {
    if (this.readyState === WebSocket.OPEN) {
      if (!event) {
        Object.keys(this.eventListeners).forEach((event) => {
          this.send(JSON.stringify([6, event as LcuEvent]))
        })
      } else {
        this.send(JSON.stringify([6, event]))
      }
    }
    this.eventListeners = {}
  }
}

export function createLcuClient(credentials: Credentials) {
  return new LcuClient(credentials)
}
