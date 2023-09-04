import type { Assert } from '@cuppachino/type-space'
type MaybeAsync<T> = T | Promise<T>
type MaybeAwaited<T> = T extends Promise<infer U> ? Awaited<U> : T
type Fallback<T, U> = [undefined] extends [T] ? U : T
type Fn<From, FromShouldBe, To> = (
  ...args: Assert<Fallback<MaybeAwaited<From>, FromShouldBe>, any[]>
) => To

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
export function proxyFunction<T, A extends any[]>(fn: (...args: A) => T) {
  return function <From extends MaybeAsync<any[]> | undefined, To>({
    from,
    to
  }: Partial<{
    from(...args: Parameters<Fn<From, A, To>>): A | Promise<A>
    to(response: T): To
  }>): (...args: Parameters<Fn<From, A, To>>) => To {
    if (from && to) {
      return new Proxy(fn, {
        async apply(target, thisArg, argArray) {
          return Reflect.apply(to, thisArg, [
            Reflect.apply(
              target,
              thisArg,
              await from(
                ...((await Promise.resolve(argArray)) as Assert<
                  Fallback<MaybeAwaited<From>, A>,
                  any[]
                >)
              )
            )
          ])
        }
      }) as unknown as Fn<From, A, To>
    } else if (from && !to) {
      return new Proxy(fn, {
        async apply(target, thisArg, argArray) {
          return Reflect.apply(
            target,
            thisArg,
            await Promise.resolve(
              from(
                ...((await Promise.resolve(argArray)) as Assert<
                  Fallback<MaybeAwaited<From>, A>,
                  any[]
                >)
              )
            )
          )
        }
      }) as unknown as Fn<From, A, To>
    } else if (!from && to) {
      return new Proxy(fn, {
        apply(target, thisArg, argArray) {
          return Reflect.apply(
            to,
            thisArg,
            Reflect.apply(target, thisArg, argArray)
          )
        }
      }) as unknown as Fn<From, A, To>
    } else {
      return fn as unknown as Fn<From, A, To>
    }
  }
}
