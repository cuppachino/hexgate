import type { Combine } from '@cuppachino/type-space'
import { type RequestInit } from 'node-fetch-commonjs'
import type { Credentials } from '../../index.js'
import { createHeaders } from '../auth/headers.js'
import { HttpsAgent } from './agent.js'

export function createRequestInit<
  PartialCredentials extends Combine<Pick<Credentials, 'certificate' | 'remotingAuthToken'>>
>({ remotingAuthToken: password, certificate }: PartialCredentials) {
  return {
    agent: new HttpsAgent(certificate),
    headers: createHeaders(password)
  } satisfies RequestInit
}
