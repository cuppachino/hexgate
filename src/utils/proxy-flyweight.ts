import type { AsyncFn } from 'src/types/generic.js'

/**
 * Create a flyweight proxy by supplying a record of async handlers.
 *
 * The first time a property is accessed, the handler is called and the result is stored in the proxy.
 * Subsequent visits to the property will return the stored result, but note that the value will always be wrapped in a promise.
 */
export const proxyFlyweight = <T extends Record<string, AsyncFn>>(
  handlers: T
) => {
  return new Proxy(
    {} as {
      [K in keyof T & string]: ReturnType<T[K]>
    },
    {
      get(target, prop: keyof T & string) {
        console.log('get', prop)
        if (!Reflect.has(target, prop)) {
          Reflect.set(target, prop, handlers[prop]())
          return Reflect.get(target, prop)
        } else {
          return Reflect.get(target, prop)
        }
      }
    }
  )
}
