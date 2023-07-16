export class Observable<T> {
  #previousValue: T
  #value: T
  #listeners: ((value: T, previousValue: T) => void)[] = []
  constructor(value: T) {
    this.#previousValue = value
    this.#value = value
  }

  get value() {
    return this.#value
  }

  set value(value: T) {
    this.#previousValue = this.#value
    this.#value = value
    this.#listeners.forEach((fn) => fn(value, this.#previousValue))
  }

  subscribe(fn: (value: T, previousValue: T) => void) {
    this.#listeners.push(fn)
    return () => {
      this.#listeners = this.#listeners.filter((f) => f !== fn)
    }
  }
}
