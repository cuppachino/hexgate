export type BaseUrl = ReturnType<typeof BaseUrl>

export function BaseUrl<const Port extends number>(port: Port) {
  return `https://127.0.0.1:${port}` as const
}
