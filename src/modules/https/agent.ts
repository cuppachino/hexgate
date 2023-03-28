import type { Subset } from '@cuppachino/type-space'
import { Agent, type AgentOptions } from 'https'
import type { Credentials } from '../../types/tokens.js'

/**
 * A helper class for instantiating an https.Agent from a certificate string or `Credentials` object.
 *
 * @param credential - Either a certificate string or an object with a certificate property (e.g. `Credentials`)
 * @param options - Additional, non-essential, options to pass to the https.Agent constructor.
 */
export class HttpsAgent<Cert extends Subset<Credentials, 'certificate'>> extends Agent {
  constructor(credential: Cert, options?: AgentOptions) {
    const certificate = typeof credential === 'string' ? credential : credential?.certificate
    super({
      keepAlive: true,
      maxSockets: 1,
      ...options,
      rejectUnauthorized: !!certificate,
      ca: options?.ca ?? certificate
    })
  }
}
