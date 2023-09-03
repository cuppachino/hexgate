/**
 * A container for a value gets updated.
 */
export interface Update<T, Payload> {
  update(payload: Payload | null): void
  isOk(): this is this & T
  ok(): (this & this & T) | undefined
}
