import type { UnknownArray } from '@cuppachino/type-space'

export type Zip<T extends UnknownArray[]> = { [I in keyof T]: T[I][number] }

/**
 * Rotates an array of arrays so that the first array becomes the first element in all arrays, the second array becomes the second element in all arrays, and so on.
 *
 * @example
 * ```ts
 * zip([1, 2, 3], ['a', 'b', 'c']) // [[1, 'a'], [2, 'b'], [3, 'c']]
 * ```
 */
export function* zip<T extends UnknownArray[]>(...arrays: T) {
  const length = Math.min(...arrays.map((e) => e.length))
  for (let i = 0; i < length; ++i) {
    yield arrays.map((e) => {
      return e[i]
    }) as { [I in keyof T]: T[I][number] }
  }
}
