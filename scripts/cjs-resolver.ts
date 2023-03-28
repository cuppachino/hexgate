import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { traverseDir } from './traverse-dir'
import { readFile, writeFile } from 'node:fs'
import { log } from './log'

export const execPromise = promisify(exec)

const PS1 = `
Dir ./dist/cjs/*.js -Recurse | Rename-Item -NewName { [io.path]::ChangeExtension($_.Name,"cjs") };
Copy-Item ./dist/esm/index.d.ts ./dist/index.d.ts;
`

const BASH = `
for file in dist/cjs/*.js; do
mv "$file" "\${file%.js}.cjs"
done;
cp dist/esm/index.d.ts ./dist/index.d.ts
`

/*
  ? Wonder if we can get away with only 1 instead of 3
  - PS1 --------------------------------
  // Remove-Item ./dist/cjs/index.d.ts ./dist/index.d.ts;
  // Remove-Item ./dist/esm/index.d.ts
  - BASH --------------------------------
  // mv dist/cjs/index.d.ts dist/index.d.ts;
  // rm -f dist/esm/index.d.ts;
*/

async function execTokens(ps1: string, bash: string) {
  const args: Parameters<typeof execPromise> =
    process.platform === 'win32' ? [ps1, { shell: 'powershell' }] : [bash]

  log?.table([process.platform, args[0]])

  try {
    await execPromise(...args)
  } catch (e) {
    throw e
  }
}

/// `dist/cjs/**/*.js -> dist/cjs/**/*.cjs`
execTokens(PS1, BASH).then(() =>
  /// .js"\) -> .cjs"\)
  traverseDir(
    './dist/cjs',
    (filePath) => {
      readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err
        let result = data.replace(/\.js"\)/g, '.cjs")')
        writeFile(filePath, result, 'utf8', (err) => {
          if (err) throw err
        })
      })
    },
    '.cjs',
    log
  )
)
