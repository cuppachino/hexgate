import type { KeyOf } from '@cuppachino/type-space'
import type { LcuOperations } from '../openapi/operations.js'

/**
 * A union of known LCU response codes.
 *
 * @example Coerce a response code into a number or string or union of both.
 * ```ts
 * type Example = [
 *   // 200 | 204 | '200' | '204'
 *   NumberLike<LcuResponseCode>,
 *   // 200 | 204
 *   IntoNumber<LcuResponseCode>,
 *   // '200' | '204'
 *   IntoNumber<LcuResponseCode>
 * ]
 * ```
 */
export type LcuResponseCode = KeyOf<
  LcuOperations[keyof LcuOperations]['responses'] extends infer U ? NonNullable<U> : never
>
