import { HexgateError } from './base-error.js'

/**
 * If the client credentials cannot be found, this error is thrown.
 */
export class MissingClientError extends HexgateError {
  constructor() {
    super(
      'Could not locate the LeagueClientUx process. Ensure the League Client is running.',
      'missing'
    )
  }
}
