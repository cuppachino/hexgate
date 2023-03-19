import type { ErrorKind } from 'hexgate/types/errors.js'

export class HexgateError extends Error {
  public kind: ErrorKind
  constructor(message: string, kind: ErrorKind) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.kind = kind
  }

  get name() {
    return this.constructor.name
  }

  get [Symbol.toStringTag]() {
    return this.constructor.name
  }
}
