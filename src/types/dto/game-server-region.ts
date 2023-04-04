import type { UnionLiteral } from '@cuppachino/type-space'

export type GameServerRegion = UnionLiteral<
  '' | 'BR1' | 'EUW1' | 'EUN1' | 'JP1' | 'KR' | 'LA1' | 'LA2' | 'NA1' | 'OC1' | 'RU' | 'TR1',
  string
>
