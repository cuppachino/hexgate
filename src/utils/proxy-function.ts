export const isPromise = <T>(value: T | Promise<T>): value is Promise<T> => {
  return value instanceof Promise
}

export type DefinitelyAwaited<T> = T extends Promise<infer U> ? Awaited<U> : T

type Fallback<T extends any[], U extends any[]> = [undefined] extends [T]
  ? U extends any[]
    ? U
    : never
  : T extends any[]
  ? T
  : never

/**
 * Check if `T` is a promise. If it is, return `Then`, otherwise return `Else`.
 */
export type IfAsync<T, Then, Else> = T extends Promise<any> ? Then : Else

/**
 * The Proxy created by `proxyFn`.
 *
 * @param From The arguments that the proxy function will receive.
 * @param FromShouldBe The arguments that the original function will receive, and that `From` will be converted to.
 * @param To The return type of the proxy function.
 */
export type ProxyFn<From extends any[], FromShouldBe extends any[], To> = (
  ...args: Fallback<From, FromShouldBe>
) => IfAsync<To, Promise<DefinitelyAwaited<To>>, DefinitelyAwaited<To>>

/**
 * Curried proxy creator. Proxy a function, and optionally transform its arguments and/or return value.
 * The return type of `from` is constrained to match the parameter types of the original function.
 * @param fn The function to proxy.
 * @returns A function that accepts an object with `from` and `to` methods.
 *
 * @example
 * ```ts
 * const addRandom = proxyFunction(add)({
 *   async from() {
 *     const generatedNumbers = await generateNumbers();
 *     return [generatedNumbers[0], generatedNumbers[1]];
 *   },
 *   to(result) {
 *     return result * 2;
 *   }
 * });
 * const randomNumber = await addRandom()
 * ```
 */
export function proxyFunction<T, ExpectedArgs extends any[]>(
  fn: (...args: ExpectedArgs) => T
) {
  /**
   * @param from A function that accepts the arguments that the proxy function will receive, and returns the arguments that the original function will receive.
   * @param to A function that accepts the return value of the original function, and returns the desired return value of the proxy function.
   * @returns `ProxyFn<From, ExpectedArgs, To>`
   * @example
   * ```ts
   * const addRandom = proxyFunction(add)({
   *   async from() {
   *     const generatedNumbers = await generateNumbers();
   *     return [generatedNumbers[0], generatedNumbers[1]];
   *   },
   *   to(result) {
   *     return result * 2;
   *   }
   * });
   * const randomNumber = await addRandom()
   * ```
   */
  return <
    ReturnTypeOfFrom extends
      | [...ExpectedArgs, ...any[]]
      | Promise<[...ExpectedArgs, ...any[]]>,
    From extends any[] = ExpectedArgs,
    To = T
  >({
    from,
    to
  }: Partial<{
    from(...args: From): ReturnTypeOfFrom
    to(res: IfAsync<ReturnTypeOfFrom, Promise<T>, T>): To
  }>): ProxyFn<From, ExpectedArgs, To> => {
    if (from && to) {
      return new Proxy(fn, {
        apply(target, thisArg, argArray) {
          const args = from(...(argArray as From))
          if (isPromise(args)) {
            return Promise.resolve(args).then((awaitedArgs) => {
              const result = Reflect.apply(target, thisArg, awaitedArgs)
              return to ? to(result) : result
            })
          } else {
            const result = Reflect.apply(target, thisArg, args)
            return to ? to(result) : result
          }
        }
      }) as any
    } else if (from && !to) {
      return new Proxy(fn, {
        apply(target, thisArg, argArray) {
          const args = from(...(argArray as From))
          if (isPromise(args)) {
            return Promise.resolve(args).then((awaitedArgs) =>
              Reflect.apply(target, thisArg, awaitedArgs)
            )
          } else {
            return Reflect.apply(target, thisArg, args)
          }
        }
      }) as any
    } else if (!from && to) {
      return new Proxy(fn, {
        apply(target, thisArg, argArray) {
          const result = Reflect.apply(target, thisArg, argArray)
          return to ? to(result) : result
        }
      }) as any
    } else {
      return new Proxy(fn, {}) as any
    }
  }
}
