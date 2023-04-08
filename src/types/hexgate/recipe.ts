import type { proxyFunction } from '../../utils/proxy-function.js'
import type { proxyFlyweight } from '../../utils/proxy-flyweight.js'
import type { extractData } from '../../utils/extract-data.js'
import type { HexgateBuild } from './fetcher.js'

export interface RecipeUtils {
  wrap: typeof proxyFunction
  unwrap: typeof extractData
  once: typeof proxyFlyweight
}

export interface RecipeApi extends RecipeUtils {
  build: HexgateBuild
}
