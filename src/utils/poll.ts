import { PollTimeoutError } from '../errors/poll-timeout.js'

/**
 * Retry a function until an error is not thrown.
 * @param fn - The function to retry.
 * @param interval - The interval in milliseconds to wait between retries. Default is 2000 ms.
 * @param max - The maximum number of retries. If undefined, will retry indefinitely.
 * @param onRetry - A function to execute after each failed attempt.
 *
 * @example
 * ```ts
 * const credentials = await poll(authenticate, 2000, 5, (n) => console.log(`attempt ${n}`))
 * ```
 */
export async function poll<T>(
  fn: () => Promise<T>,
  interval = 2000,
  max?: number,
  onRetry?: (n: number) => void
): Promise<T> {
  let attempts = 0
  let result: T | null = null
  while (result === null) {
    attempts++
    try {
      result = await fn()
    } catch (e) {
      if (max !== undefined) {
        if (max <= 0) {
          throw new PollTimeoutError()
        }
        max--
      }
      onRetry?.(attempts)
      await new Promise((resolve) => setTimeout(resolve, interval))
    }
  }
  return result
}
