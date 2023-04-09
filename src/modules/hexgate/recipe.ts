import type { RecipeApi } from '../../types/hexgate/recipe.js'
import { extractData as unwrap } from '../../utils/extract-data.js'
import { proxyFlyweight as once } from '../../utils/proxy-flyweight.js'
import { proxyFunction as wrap } from '../../utils/proxy-function.js'
import { result } from '../../utils/result.js'
import type { Hexgate } from './index.js'

/**
 * Create a recipe for a Hexgate instance.
 *
 * ### Recipe API
 *
 * The first argument of the `api` callback is an object with following methods:
 *
 * - `build` - The build method of the Hexgate instance. Use this to construct a typed request function.
 * - `wrap` - Use this to wrap a function, and transform it's parameters and return values with automatic type inference.
 * - `unwrap` - Curried convenience method for unwrapping the `data` property of a response. The first call takes an optional error message. The second call will extract the `data` property from the response.
 * - `once` - Use this to create a flyweight proxy by supplying a record of async handlers. The first time a property is accessed, the handler is called, the result is cached, and the promise is returned. Subsequent accesses will return the cached promise.
 * - `result` - Which can be used to represent a successful or failed request. See the `result` utility function for more information.
 * @returns The recipe, which takes a `Hexgate` instance and returns `U`.
 */
export function createRecipe<T extends Hexgate, U>(
  api: ({ build, wrap, unwrap, once, result }: RecipeApi) => U
) {
  return (hexgate: T): U =>
    api({
      build: hexgate['build'],
      wrap,
      unwrap,
      once,
      result
    })
}
