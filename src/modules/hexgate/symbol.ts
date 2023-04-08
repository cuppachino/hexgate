import type { Hexgate } from './index.js'

export const hexgateSymbol: unique symbol = Symbol(
  'internal hexgate instance symbol'
)

export const extractHexgateSymbol = <T extends Hexgate>(hexgate: T) =>
  Reflect.get(hexgate, hexgateSymbol)
