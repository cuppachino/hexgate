/// Remove node-fetch-commonjs pollyfill for ESM builds.
import { existsSync } from 'fs'
import fs from 'fs/promises'
import { dirname, resolve } from 'path'

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function removePollyfills() {
  const rootIndex = resolve(__dirname, '../dist/esm/index.js')
  const rootDtsIndex = resolve(__dirname, '../dist/esm/index.d.ts')
  const polyfillDir = resolve(__dirname, '../dist/esm/utils/pollyfills')
  if (
    !existsSync(rootIndex) ||
    !existsSync(rootDtsIndex) ||
    !existsSync(polyfillDir)
  ) {
    throw new Error(
      'The library is either not built or the pollyfill directory has been removed. Please check the pollyfill-resolver script.'
    )
  }

  /// Remove barrel import/export from root ESM index.
  const file = (await fs.readFile(rootIndex)).toString()
  const dtsFile = (await fs.readFile(rootDtsIndex)).toString()
  const stringsToRemove = [
    '/// --- Polyfills ---------------------------------------------------------------',
    '/// Fetch (node-fetch)',
    "import './utils/pollyfills/fetch.js';",
    "export * from './utils/pollyfills/fetch.js';"
  ]
  const rm = (str: string) =>
    str
      .split('\n')
      .filter((line) => !stringsToRemove.includes(line))
      .join('\n')

  const newFile = rm(file)
  const newDtsFile = rm(dtsFile)

  /// Write back to root ESM index.
  await fs.writeFile(rootIndex, newFile)
  await fs.writeFile(rootDtsIndex, newDtsFile)

  /// Remove the pollyfill directory.
  await fs.rm(polyfillDir, { recursive: true, force: true })

  /// All done.
  console.log('Pollyfills removed.')
}

removePollyfills()
