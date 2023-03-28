import cx, { Color } from 'colorix'
import fs from 'fs'
import path from 'path'

const ignored = cx('dim', 'italic', 'strikethrough')
const matchesExt = (string: string, ext: string, ...colors: Color[]) => {
  const i = string.lastIndexOf(ext)
  return `${string.slice(0, i)}${cx(...colors)(ext)}${string.slice(i + ext.length)}`
}

export function traverseDir(
  dir: string,
  fn: (filePath: string) => void,
  ext = '',
  log: (((...args: any[]) => void) & { count?: (arg: any) => void }) | undefined = undefined,
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
            log?.(matchesExt(filePath, ext, 'green', 'italic'))
            fn(filePath)
          } else {
            log?.(ignored(filePath))
          }
        }
      })
    })
  })
}
