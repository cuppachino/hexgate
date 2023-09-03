import type { UnknownRecord } from '@cuppachino/type-space'

export const hexgateSymbol: unique symbol = Symbol(
  'internal hexgate instance symbol'
)

export const extractHexgateSymbol = <T extends UnknownRecord>(value: T) =>
  Reflect.get(value, hexgateSymbol, value) as T extends {
    [hexgateSymbol]: infer U
  }
    ? U
    : unknown
