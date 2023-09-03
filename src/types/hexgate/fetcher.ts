import {
  Fetcher,
  type CreateFetch,
  type TypedFetch,
  type ApiResponse
} from '@cuppachino/openapi-fetch'
import type { LcuPaths } from '../openapi/paths.js'
import type { Combine } from '@cuppachino/type-space'
import type { RequestInit } from 'node-fetch-commonjs'

/**
 * Check if the first parameter of the request function is an empty object.
 * If it is, make it optional so that developers don't have to pass an empty object.
 * `@cuppachino/openapi-fetch` will supply an empty object for us, but that information
 * is not included in package's type declarations.
 * @internal
 */
export type OptionalEmptyArg<
  T extends (arg: any, ...rest: unknown[]) => unknown
> = (arg?: Parameters<T>[0], init?: RequestInit) => ReturnType<T>

/**
 * Inverse of `OptionalEmptyArg`.
 * @internal
 * @see {@link OptionalEmptyArg}
 */
export type RequiredEmptyArg<
  T extends (arg: any, ...rest: unknown[]) => unknown
> = (arg: Parameters<T>[0], init?: RequestInit) => ReturnType<T>

type ReturnTypeFetch<T> = T extends (...args: any[]) => any
  ? T extends TypedFetch<infer OP>
    ? OP extends {
        responses: infer R
      }
      ? R extends {
          200: infer RB
        }
        ? RB extends {
            schema?: infer S
          }
          ? S
          : RB extends {
              content: {
                'application/json': infer C
              }
            }
          ? C
          : RB extends {
              content: {
                'application/json': infer RB
              }
            }
          ? RB
          : never
        : never
      : never
    : never
  : never

type ReplaceReturnType<T, U> = T extends (...args: any[]) => Promise<any>
  ? (...args: Parameters<T>) => Promise<U>
  : T

/**
 * The signature of a request builder's `create` function. Returns a request function.
 * @internal
 */
export type HexgateCreate<T, M> = Parameters<
  ReturnType<CreateFetch<M, T>>
>[0] extends Record<string, never> // if the first parameter is an empty object
  ? (
      ...args: Parameters<CreateFetch<M, T>>
    ) => ReplaceReturnType<
      OptionalEmptyArg<ReturnType<CreateFetch<M, T>>>,
      ApiResponse<ReturnTypeFetch<ReturnType<CreateFetch<M, T>>>>
    >
  : // ) => OptionalEmptyArg<ReturnTypeFetch<ReturnType<CreateFetch<M, T>>>>
    (
      ...args: Parameters<CreateFetch<M, T>>
    ) => ReplaceReturnType<
      RequiredEmptyArg<ReturnType<CreateFetch<M, T>>>,
      ApiResponse<ReturnTypeFetch<ReturnType<CreateFetch<M, T>>>>
    >

/**
 * The function signature of an LCU request builder.
 */
export type HexgateBuild = <P extends keyof LcuPaths>(
  path: P
) => {
  method: <M extends keyof LcuPaths[P]>(
    method: M
  ) => {
    create: HexgateCreate<LcuPaths[P][M], M>
  }
}

/**
 * Internal type wrapper for `Fetcher` from `@cuppachino/openapi-fetch`.
 * @internal
 */
export type HexgateFetcher = Combine<
  Omit<ReturnType<typeof Fetcher.for<LcuPaths>>, 'path'> & {
    path: HexgateBuild
  }
>
