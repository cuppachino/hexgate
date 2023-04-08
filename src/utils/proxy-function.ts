import type { UnknownFunction } from 'src/types/generic.js'
import { identity } from './identity.js'

/**
 * Proxy a function, and optionally transform its parameters and/or return types by supplying `from` and `to` functions.
 *
 * @example
 * Proxy a function and provide a `from` args transformer. The return type of `from` is constrained to match the parameter types of the original function.
 * This calls the `from` function, then passes the result to the original function via the `Reflect` API.
 *
 * ```ts
 * const subtract = (a: number, b: number) => a - b
 * const c = proxyFunction(add)(([a, b]) => [b, a])(0, 1) // 1
 * const d = proxyFunction(subtract)(([a, b]) => [b, a])(0, 1) // -1
 * ```
 *
 * @example
 * Proxy a function and transform its return type. The `result` parameter of the `to` function is inferred from the return type of the original function.
 * This transforms the result of the original function before returning it.
 *
 * ```ts
 * const add = (a: number, b: number) => a + b
 * const result = proxyFunction(add)(undefined, (result) => `The result is ${result}`) satisfies (
 *   a: number,
 *   b: number
 * ) => string
 * ```
 */
export function proxyFunction<Fn extends UnknownFunction>(fn: Fn) {
  return <
    FromParams extends undefined | ((...args: any) => Parameters<Fn>) = (
      ...args: Parameters<Fn>
    ) => Parameters<Fn>,
    ToReturn = ReturnType<Fn>
  >(
    {
      from,
      to = identity
    }: {
      from?: FromParams extends (...args: Parameters<Fn>) => Parameters<Fn>
        ? FromParams
        : FromParams extends (...args: any[]) => Parameters<Fn>
        ? FromParams
        : never
      to?: (result: ReturnType<Fn>) => ToReturn
    } = {
      to: identity
    }
  ) => {
    return new Proxy(
      fn as FromParams extends undefined
        ? (...args: Parameters<Fn>) => ToReturn
        : FromParams extends (...args: Parameters<Fn>) => Parameters<Fn>
        ? (...args: Parameters<FromParams>) => ToReturn
        : FromParams extends (...args: any[]) => Parameters<Fn>
        ? (...args: Parameters<FromParams>) => ToReturn
        : Fn,

      {
        apply: (
          target,
          thisArg,
          args: FromParams extends undefined
            ? Parameters<Fn>
            : FromParams extends (...args: Parameters<Fn>) => Parameters<Fn>
            ? Parameters<FromParams>
            : FromParams extends (...args: any[]) => Parameters<Fn>
            ? Parameters<FromParams>
            : Parameters<Fn>
        ) =>
          Reflect.apply(to, thisArg, [
            Reflect.apply(target, thisArg, from?.(...(args as any[])) ?? args)
          ])
      }
    )
  }
}
