import type { PhantomError } from './phantom.js'

/**
 * Wrap a type in an "is ok" state.
 * @see {@link Err}
 * @see {@link Result}
 */
export type Ok<T> = {
  isOk: true
  unwrap(): T
}

/**
 * Wrap a type in an "is error" state.
 * @see {@link Ok}
 * @see {@link Result}
 */
export type Err<E> = {
  isOk: false
  unwrap: () => E
}

/**
 * A union type of {@link Ok} and {@link Err}.
 */
export type Result<T, E> = Ok<T> | Err<E>

/**
 * Convert an async function to a function that returns a {@link Result} type.
 * @param fn The function to convert.
 * @returns A function that returns a {@link Result} type.
 * @example
 * ```ts
 * const fetchUser = intoResult(async (id: number) => ...)<'user not found', Error>
 * const user = await fetchUser(1)
 * if (user.isOk) {
 *  // user.value is of type User
 * } else {
 * // user.error is of type Error
 * }
 * ```
 * @see {@link Ok}
 * @see {@link Err}
 */
export type IntoResult<
  T extends (...args: any[]) => any,
  Expect,
  ErrorType
> = Result<Awaited<ReturnType<T>>, PhantomError<Expect, ErrorType>>
