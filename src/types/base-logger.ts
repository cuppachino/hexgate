export type LogFn = (...args: any[]) => void

export interface BaseLogger {
  error: LogFn
  warn: LogFn
  info: LogFn
  debug: LogFn
  trace: LogFn
}
