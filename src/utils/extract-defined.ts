import type { ExtractDefined } from '../types/generic.js'

export function extractDefined<T extends Record<PropertyKey, unknown>>(
  obj?: T
) {
  if (!obj) return {}
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => v !== undefined)
  ) as ExtractDefined<T>
}
