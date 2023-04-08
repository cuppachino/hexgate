import type { Credentials } from '../../types/tokens.js'
import { Hexgate } from './index.js'

/** Create a new Hexgate instance */
export function createHexgate(credentials: Credentials) {
  return new Hexgate(credentials)
}
