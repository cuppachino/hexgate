import { Fetcher } from '@cuppachino/openapi-fetch'
import type { LcuPaths } from '../../types/openapi/paths.js'
import type { HexgateFetcher } from '../../types/hexgate/fetcher.js'

/**
 * Internal wrapper for `Fetcher.for<LcuPaths>`.
 * @internal
 */
export const hexgateForLcu = Fetcher.for<LcuPaths> as () => HexgateFetcher
