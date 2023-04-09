import type { IntoResult } from '../types/result.js'

/**
 * Convert an async function to a function that returns a `result` type.
 * @param fn The function to convert.
 * @returns A function that returns a `result` type.
 * @example
 * ```ts
 * import { type ApiError, createHexgate, createRecipe, result } from 'hexgate'
 *
 * const $recipe = createRecipe(
 *   ({ build }) =>
 *     result(build('/lol-lobby/v2/lobby').method('get').create())<
 *       'Is there a lobby?',
 *       ApiError
 *     >
 * )
 *
 * const getLobby = $recipe(createHexgate(await auth()))
 *
 * getLobby().then((res) => {
 *   if (res.isOk) {
 *     const { data } = res.unwrap()
 *     console.log(data)
 *   } else {
 *     try {
 *       res.unwrap()
 *     } catch (err) {
 *       console.error(err)
 *     }
 *   }
 * })
 * ```
 * @see {@link IntoResult}
 */
export function result<T extends (...args: any[]) => Promise<any>>(fn: T) {
  return async <Expect extends string = 'unknown error', ErrorType = unknown>(
    ...args: Parameters<T>
  ): Promise<IntoResult<T, Expect, ErrorType>> => {
    try {
      const value = await fn(...args)
      return {
        isOk: true,
        unwrap: () => value
      }
    } catch (error) {
      return {
        isOk: false,
        unwrap: () => {
          throw error as ErrorType
        }
      }
    }
  }
}
