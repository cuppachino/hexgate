import type { Subset } from '@cuppachino/type-space'
import type { Credentials } from '../../types/tokens.js'
import https from 'node:https'

/**
 * A helper class for instantiating an https.Agent from a certificate string or `Credentials` object.
 *
 * @param credential - Either a certificate string or an object with a certificate property (e.g. `Credentials`)
 * @param options - Additional, non-essential, options to pass to the https.Agent constructor.
 */
export class HttpsAgent<Cert extends Subset<Credentials, 'certificate'>> extends https.Agent {
  constructor(credential: Cert, options?: https.AgentOptions) {
    const certificate = typeof credential === 'string' ? credential : credential?.certificate
    super({
      keepAlive: true,
      maxSockets: 25,
      ...options,
      rejectUnauthorized: !!certificate,
      ca: options?.ca ?? certificate
    })
  }
}
