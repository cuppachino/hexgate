export type Observer<T> = (value: T, prev: T) => void

export class Observable<T> {
  #observers: Set<Observer<T>> = new Set()
  #value: T
  constructor(value: T) {
    this.#value = value
  }

  get value() {
    return this.#value
  }

  set value(value: T) {
    const prev = this.#value
    this.#value = value
    this.#observers.forEach((observer) => observer(value, prev))
  }

  subscribe = (observer: Observer<T>) => {
    this.#observers.add(observer)
    return () => {
      this.#observers.delete(observer)
    }
  }
}
