export function baseUrl<const Port extends number>(port: Port) {
  return `https://127.0.0.1:${port}` as const
}
