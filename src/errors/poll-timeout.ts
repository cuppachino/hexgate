import { HexgateError } from './base-error.js'

/**
 * Thrown when the maximum number of retries is exceeded.
 */
export class PollTimeoutError extends HexgateError {
  constructor() {
    super('Polling timeout! Max retries exceeded', 'timeout')
  }
}
