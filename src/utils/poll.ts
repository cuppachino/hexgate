import { PollTimeoutError } from '../errors/poll-timeout.js'

/**
 * Retry a function until an error is not thrown.
 * @param fn - The function to retry.
 * @param interval - The interval in milliseconds to wait between retries.
 * @param max - The maximum number of retries. If undefined, will retry indefinitely.
 * @param onRetry - A function to execute after each failed attempt.
 *
 * @example
 * ```ts
 * const credentials = await poll(authenticate, 5000, 5, (n) => console.log(`attempt ${n}`))
 * ```
 */
export async function poll<T>(
  fn: () => Promise<T>,
  interval = 5000,
  max: number | undefined = undefined,
  onRetry?: (n: number) => void,
  _n = 0
): Promise<T> {
  try {
    return await fn()
  } catch {
    if (max !== undefined) {
      if (max <= 0) {
        throw new PollTimeoutError()
      }
      max--
    }
    onRetry?.(_n)
    await new Promise((resolve) => setTimeout(resolve, interval))
    return poll(fn, interval, max, onRetry, _n + 1)
  }
}
