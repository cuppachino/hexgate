import { HexgateError } from './base-error.js'

/**
 * League of Legends only runs on Windows and macOS officially, and linux through
 * WINE. This error is thrown when the platform is not supported.
 */
export class InvalidPlatformError extends HexgateError {
  constructor() {
    super('Unsupported platform! Expected Windows, macOS, or Wine', 'invalid')
  }
}
