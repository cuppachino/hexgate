import type { Subset } from '@cuppachino/type-space'
import type { Credentials } from '../../types/tokens.js'
import type { HeadersInit } from 'node-fetch-commonjs'

export function createHeaders(
  credentials: Subset<Credentials, 'remotingAuthToken'>
) {
  const password =
    typeof credentials === 'string'
      ? credentials
      : credentials.remotingAuthToken
  return {
    Authorization: 'Basic ' + Buffer.from(`riot:${password}`).toString('base64')
  } satisfies HeadersInit
}
