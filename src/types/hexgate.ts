import type { CreateFetch } from '@cuppachino/openapi-fetch'
import type { RequestInit } from 'node-fetch'
import type { LcuPaths } from './openapi/paths.js'

export type HexgatePath<P extends keyof LcuPaths> = ReturnType<
  (path: P) => {
    method: <M extends keyof LcuPaths[P]>(
      method: M
    ) => {
      create: ReturnType<CreateFetch<M, LcuPaths[P][M]>> extends (
        arg: Record<string, never>,
        init?: RequestInit
      ) => infer R
        ? (
            ...args: Parameters<CreateFetch<M, LcuPaths[P][M]>>
          ) => (arg?: Record<string, never>, init?: RequestInit) => R
        : CreateFetch<M, LcuPaths[P][M]>
    }
  }
>
