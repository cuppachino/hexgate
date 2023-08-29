import type { proxyFunction } from '../../utils/proxy-function.js'
import type { proxyFlyweight } from '../../utils/proxy-flyweight.js'
import type { extractData } from '../../utils/extract-data.js'
import type { HexgateBuild } from './fetcher.js'
import type { result } from '../../utils/result.js'
import type { Hexgate } from '../../modules/hexgate/index.js'

export interface RecipeUtils {
  wrap: typeof proxyFunction
  unwrap: typeof extractData
  once: typeof proxyFlyweight
  result: typeof result
}

export interface RecipeApi extends RecipeUtils {
  build: HexgateBuild
}

export type RecipeFn<R> = (hexgate: Hexgate) => R
