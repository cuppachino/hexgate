import type { ApiResponse } from '@cuppachino/openapi-fetch'

export function extractData<E extends string>(expect?: E) {
  if (expect) {
    return async <T>(response: Promise<ApiResponse<T>>) => {
      const res = await response
      if (!res.ok) {
        throw new Error(`${expect} ${res.status} ${res.statusText} ${res.url}`)
      } else {
        return res.data
      }
    }
  } else {
    return async <T>(response: Promise<ApiResponse<T>>) => {
      const res = await response
      return res.data
    }
  }
}
