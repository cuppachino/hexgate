import type { ApiResponse } from '@cuppachino/openapi-fetch'
import type { RequestInit } from 'node-fetch-commonjs'
import type { HexgateBuild } from '../../types/hexgate/fetcher.js'
import { extractData } from '../../utils/extract-data.js'
import { proxyFlyweight as once } from '../../utils/proxy-flyweight.js'
import { proxyFunction as wrap } from '../../utils/proxy-function.js'
import { result } from '../../utils/result.js'
import type { Hexgate } from '../hexgate/index.js'

/**
 * Default arguments for a built request function that takes no arguments.
 */
export type FromDefaultArgs = [
  arg?: Record<string, never> | undefined,
  init?: RequestInit | undefined
]

/**
 * Methods available on the `api` object passed to the `createRecipe` callback.
 */
export interface RecipeUtils {
  build: HexgateBuild
  wrap: typeof wrap
  unwrap<T, A extends any[]>(
    fn: (...args: A) => Promise<ApiResponse<T>>
  ): (...args: Parameters<typeof fn>) => Promise<T>
  once: typeof once
  result: typeof result
  from(): FromDefaultArgs
  to<T>(response: Promise<ApiResponse<T>>): Promise<T>
}

export class RecipeApi {
  /**
   * The build method of a Hexgate instance.
   */
  build: HexgateBuild
  constructor(hexgate: Hexgate) {
    this.build = hexgate['build']
  }

  /**
   * #### Curried
   * Create a new proxy that will call `from` with the supplied arguments, and then call `to` with the result before returning the result.
   *
   * @see [wrap](../../utils/proxy-function.ts)
   */
  wrap = wrap

  /**
   * Create a new function that extracts the data from the response of the supplied function.
   */
  unwrap<T, A extends any[]>(fn: (...args: A) => Promise<ApiResponse<T>>) {
    return async (...args: Parameters<typeof fn>): Promise<T> => {
      const response = await fn(...args)
      return response.data
    }
  }

  /**
   * @see [once](../../utils/proxy-flyweight.ts)
   */
  once = once

  /**
   * @see [result](../../utils/result.ts)
   */
  result = result

  /**
   * Returns empty arguments.
   * @returns Default arguments for a built request function that takes no arguments.
   */
  from(): FromDefaultArgs {
    return []
  }
  /**
   * Create a new function that extracts the data from the response of the supplied function.
   */
  to = extractData()
}
