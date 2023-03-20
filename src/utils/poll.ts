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
 * const credentials = await poll(authenticate, 5000)
 * ```
 */
export async function poll<T>(
  fn: () => Promise<T>,
  interval = 5000,
  max = 5,
  onRetry?: () => void
): Promise<T> {
  try {
    return await fn()
  } catch {
    if (max !== undefined) {
      if (max === 0) throw new PollTimeoutError()
      max--
    }
    onRetry?.()
    await new Promise((resolve) => setTimeout(resolve, interval))
    return poll(fn, interval, max, onRetry)
  }
}
