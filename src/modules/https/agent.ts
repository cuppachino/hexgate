import type { Subset } from '@cuppachino/type-space'
import type { Credentials } from '../../types/tokens.js'
import https from 'node:https'

export class HttpsAgent extends https.Agent {
  constructor(credential: Subset<Credentials, 'certificate'>, options?: https.AgentOptions) {
    const certificate = typeof credential === 'string' ? credential : credential?.certificate
    super({
      ...options,
      rejectUnauthorized: !!certificate,
      ca: options?.ca ?? certificate
    })
  }
}
