import type { Assert, Flat, KeyOf, Split } from '@cuppachino/type-space'

/**
 * Exclude all properties from `T` where `T[K]` is `never`.
 */
export type ExcludeNever<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K]
}

/**
 * A type that is either `T` or `undefined` or `null`.
 */
export type Maybe<T = undefined | null> = T | undefined | null

/**
 * Pick properties from `T` where `T[K]` has a property `P`
 * @internal
 * @example
 * ```ts
 * type Operations = {
 *   a: { responses: ApiResponse[] }
 *   b: { responses: ApiResponse[]; parameters: string[] }
 * }
 * type cases = [
 *   Expect<
 *     Equal<
 *       PickInner<Operations, 'parameters'>,
 *       { b: { responses: ApiResponse[]; parameters: string[] } }
 *     >
 *   >
 * ]
 * ```
 */
export type PickInner<T, P extends KeyOf<T[KeyOf<T>]>> = {
  [K in keyof T as T[K] extends { [K2 in P]?: any } ? K : never]: T[K]
}

/**
 * Uppercases the first letter of each string in an array of strings.
 * @internal
 */
export type CapitalizeEach<T extends string[]> = {
  [K in keyof T]: Capitalize<T[K]>
}

/**
 * Splits a string literal at each "/" and "-" character into a tuple of strings.
 * @internal
 * @example
 * ```ts
 * type cases = [
 *   Expect<Equal<SplitDashesAndSlashes<'lol-lobby/v2/lobby'>, ['lol', 'lobby', 'v2', 'lobby']>>
 * ]
 * ```
 */
export type SplitDashesAndSlashes<T extends string> = Flat<
  Split<T, '-'> extends infer S extends string[]
    ? {
        [K in keyof S]: Split<Assert<S[K], string>, '/'>
      }
    : never
> extends infer F extends string[]
  ? F
  : never

/** Boolean - true if `A` extends `B` extends `A` */
export type Exact<A, B> = Extract<A, B> extends never
  ? false
  : Extract<B, A> extends never
  ? false
  : true

/** Boolean - true if `A` extends `B` */
export type Extends<A, B> = Extract<A, B> extends never ? false : true
