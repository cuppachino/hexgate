export class Heartbeat<T> {
  private interval: NodeJS.Timer | null = null
  constructor(private fn: () => T, private ms = 2000) {}
  stop() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
    return this
  }
  start() {
    this.stop()
    this.interval = setInterval(this.fn, this.ms)
    return this
  }
}
