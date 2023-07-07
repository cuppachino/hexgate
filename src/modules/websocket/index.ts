import type { ClientRequestArgs } from 'http'
import WebSocket from 'ws'
import type { Credentials } from '../../types/tokens.js'
import { createHeaders } from '../auth/headers.js'
import type {
  LcuEvent,
  LcuEventLookup
} from '../../types/dto/lcu-event-lookup.js'

export type LcuWebSocketEvent<T extends LcuEvent> = {
  data: LcuEventLookup[T]
  eventType: T
  uri: string
}

export class LcuClient extends WebSocket {
  eventListeners: {
    [K in keyof LcuEventLookup]?: ((data: LcuEventLookup[K]) => void)[] // ((data: LcuEventLookup[K] extends undefined ? unknown : LcuEventLookup[K]) => void)
  } = {}

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
    const [eventCode, eventType, eventData] = (():
      | [8, LcuEvent, LcuEventLookup[LcuEvent]]
      | [0, undefined, undefined] => {
      try {
        const json = JSON.parse(data.toString())
        if (json[0] === 8) {
          return json as [8, LcuEvent, LcuEventLookup[LcuEvent]]
        }
      } catch (error) {
        // console.error(error)
      }
      return [0, undefined, undefined] as [0, undefined, undefined]
    })()

    if (eventCode) {
      const listeners = this.eventListeners[eventType]
      if (listeners) {
        listeners.forEach((listener) => {
          listener(eventData)
        })
      }
    }
  }

  subscribe<T extends LcuEvent>(
    event: T,
    listener: (data: LcuEventLookup[T]) => void
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
