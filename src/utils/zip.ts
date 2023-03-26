/**
 * Rotates an array of arrays so that the first array becomes the first element in all arrays, the second array becomes the second element in all arrays, and so on.
 *
 * @example
 * ```ts
 * zip([1, 2, 3], ['a', 'b', 'c']) // [[1, 'a'], [2, 'b'], [3, 'c']]
 * ```
 */
export function zip<T>(...arrays: T[][]): T[][] {
  const length = Math.min(...arrays.map((arr) => arr.length))
  const result: T[][] = []

  for (let i = 0; i < length; i++) {
    result.push(arrays.map((arr) => arr[i]))
  }

  return result
}
