import { existsSync, mkdirSync } from 'fs'
import { dirname } from 'path'

export function mkdirs(path: string) {
  const dir = dirname(path)
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }
  return path
}
