import prettier from 'prettier'

const formatTypeScript = (code: string) => {
  return prettier.format(code, {
    parser: 'typescript',
    semi: false
  })
}

const unknownType = `type Unknown<T> = {
  data: unknown
  eventType: T
  uri: string
}`

const toType = ([rawName, rawDesc]: [string, string]) => {
  if (rawName === 'OnJsonApiEvent_lol-champ-select_v1_session') {
    return `'OnJsonApiEvent_lol-champ-select_v1_session': LcuComponents['schemas']['LolChampSelectChampSelectSession'],`
  }

  const desc = rawDesc ? `/**\n * ${rawDesc}\n */\n` : ''
  return `${desc}'${rawName}': Record<string, unknown>,`
}

const toTypes = (arr: [string, string][]) => {
  return (
    [...new Set(arr.map(toType))]
      .join('\n')
      .replace(/^/, 'export interface LcuEventLookup {\n') + '\n}'
  )
}

import { auth, Hexgate } from '../src/'
const json = (
  await new Hexgate(await auth()).build('/Help').method('post').create({
    format: 1,
    target: 1
  })({})
).data as Record<'events' | 'functions' | 'types', Record<string, string>>

const types = toTypes(Object.entries(json.events))
const extra = `export type LcuEvent = keyof LcuEventLookup`
const out = `import type {LcuComponents} from '../openapi/components.js'\n${unknownType}\n${types}\n\n${extra}`

// write the types to a file
import fs from 'fs'
fs.writeFileSync('./src/types/dto/lcu-event-lookup.ts', formatTypeScript(out))
