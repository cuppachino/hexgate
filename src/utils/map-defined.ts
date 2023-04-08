/**
 * Map over an array, omitting undefined results.
 * This is like calling `Array.prototype.map` and then `Array.prototype.filter`'ing out undefined values.
 * The difference is that this function performs both operations during a single iteration.
 */
export function mapDefined<T, U>(
  arr: T[],
  fn: (item: T) => U | undefined
): U[] {
  const result: U[] = []
  for (const item of arr) {
    const mapped = fn(item)
    if (mapped !== undefined) {
      result.push(mapped)
    }
  }
  return result
}
