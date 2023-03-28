import cx, { Color } from 'colorix'

import fs from 'fs'
import path from 'path'

const ignored = cx('dim', 'italic', 'strikethrough')
const matchesExt = (string: string, ext: string, ...colors: Color[]) => {
  const i = string.lastIndexOf(ext)
  return `${string.slice(0, i)}${cx(...colors)(ext)}${string.slice(i + ext.length)}`
}

export function replaceExtInOutput(content: string) {
  const matches = content.match(/\.cjs"\)/g)
  const count = matches?.[0] === null ? 0 : matches?.length
  if (count) {
    return content.replace(/\.cjs"\)/g, `${cx('cyan')('.cjs"')})`)
  }
}

export function traverseDir(
  dir: string,
  fn: (filePath: string) => void,
  ext = '',
  log: (((...args) => void) & { count?: (arg) => void }) | undefined = undefined,
  acc = [],
  count = 0
) {
  const inc = () => (count += 1)
  fs.readdir(dir, (err, files) => {
    if (err) throw err
    files.forEach((file) => {
      const filePath = path.join(dir, file)
      fs.stat(filePath, (err, stat) => {
        if (err) throw err
        if (stat.isDirectory()) {
          traverseDir(filePath, fn, ext, log, acc, inc())
        } else {
          if (filePath.endsWith(ext)) {
            log?.(matchesExt(filePath, ext, 'yellow'))
            fn(filePath)
          } else {
            log?.(ignored(filePath))
          }
        }
      })
    })
  })
}
