import type { Hexgate } from '../hexgate/index.js'
import { RecipeApi, type RecipeUtils } from './api.js'
import { recipeSymbol, extractRecipeSymbol } from './symbol.js'

/**
 * The function returned by `createRecipe`.
 */
export interface Recipe<T> {
  (hexgate: Hexgate): T
  readonly [recipeSymbol]: symbol
}

/**
 * The type of the callback passed to `createRecipe`.
 */
export type RecipeApiFn<T> = (api: RecipeUtils) => T

/**
 * The type signature matching the `createRecipe` function.
 */
export type RecipeCreator<T> = (api: RecipeUtils) => Recipe<T>

/**
 * Base class that can be constructed with either a recipe or a recipe api function.
 * @example
 * ```ts
 * class CreateWithRecipe<T> {
 *   protected recipe: Recipe<() => Promise<T>>
 *   constructor(recipe: Recipe<() => Promise<T>>)
 *   constructor(api: RecipeApiFn<() => Promise<T>>)
 *   constructor(recipe: Recipe<() => Promise<T>> | RecipeApiFn<() => Promise<T>>) {
 *     if (!isRecipeFn<() => Promise<T>>(recipe)) {
 *       recipe = createRecipe(recipe)
 *     }
 *     this.recipe = recipe
 *   }
 * }
 * ```
 */
export class CreateWithRecipe<T> {
  protected recipe: Recipe<() => Promise<T>>
  constructor(recipe: Recipe<() => Promise<T>>)
  constructor(api: RecipeApiFn<() => Promise<T>>)
  constructor(recipe: Recipe<() => Promise<T>> | RecipeApiFn<() => Promise<T>>)
  constructor(
    recipe: Recipe<() => Promise<T>> | RecipeApiFn<() => Promise<T>>
  ) {
    if (!isRecipeFn<() => Promise<T>>(recipe)) {
      recipe = createRecipe(recipe)
    }
    this.recipe = recipe
  }
}

/**
 * Check if a function is a recipe created with `createRecipe`.
 */
export function isRecipeFn<T>(fn: unknown): fn is Recipe<T> {
  return typeof fn === 'function' && extractRecipeSymbol(fn) !== undefined
}

/**
 * Create a recipe for a Hexgate instance.
 *
 * ### Recipe API
 *
 * The first argument of the `api` callback is an object with following methods:
 *
 * - `build` - The build method of the Hexgate instance. Use this to construct a typed request function.
 * - `wrap` - Use this to wrap a function, and transform it's parameters and return values with automatic type inference.
 * - `unwrap` - Returns a new function that unwraps the response of the supplied function.
 * - `from` - Returns empty arguments.
 * - `to` - Use this to unwrap a response, and transform it's data with automatic type inference.
 * - `once` - Use this to create a flyweight proxy by supplying a record of async handlers. The first time a property is accessed, the handler is called, the result is cached, and the promise is returned. Subsequent accesses will return the cached promise.
 * - `result` - Which can be used to represent a successful or failed request. See the `result` utility function for more information.
 * @returns The recipe, which takes a `Hexgate` instance and returns `U`.
 */
export function createRecipe<T>(
  api:
    | (({ build, wrap, from, to, unwrap, once, result }: RecipeUtils) => T)
    | RecipeApiFn<T>
): Recipe<T> {
  const recipeFn = (hexgate: Hexgate) => api(new RecipeApi(hexgate))
  recipeFn[recipeSymbol] = Symbol('unique identifier for recipe')
  return recipeFn
}

export default createRecipe

export * from './api.js'
export * from './symbol.js'
