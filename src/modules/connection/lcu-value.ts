import type { Update } from '../../types/update.js'
import type { Hexgate } from '../hexgate/index.js'
import { CreateWithRecipe } from '../recipe/index.js'

/**
 * Non-nullable version of `LcuValue`. This means that the `inner` property is guaranteed to be non-null.
 */
export interface SafeLcuValue<T> extends LcuValue<T> {
  inner: NonNullable<LcuValue<T>['inner']>
}

/**
 * A container for a value that needs to be fetched from the LCU.
 *
 * @method `update` - Either fetches the value from the LCU, or nullifies the `inner` value.
 */
export class LcuValue<T>
  extends CreateWithRecipe<T>
  implements Update<SafeLcuValue<T>, Hexgate>
{
  public inner: T | null = null

  /**
   * Update the value.
   */
  async update(httpsClient: Hexgate | null) {
    if (httpsClient === null) {
      this.inner = null
    } else {
      const inner = await this.recipe(httpsClient)()
      this.inner = inner
    }
    return this
  }

  /**
   * Assert that the `inner` value is not null.
   * @throws Error
   */
  assertOk(): asserts this is this & SafeLcuValue<T> {
    if (!this.isOk()) {
      const msg = `${this.constructor.name} is not ok!`
      throw new Error(msg)
    }
  }

  /**
   * Check if the `inner` value is not null.
   */
  isOk(): this is this & SafeLcuValue<T> {
    return this.inner !== null
  }

  /**
   * Returns `this` if the `inner` value is not null, otherwise returns `undefined`. This is useful for chaining.
   */
  ok(): (this & SafeLcuValue<T>) | undefined {
    if (this.isOk()) {
      return this
    }
    return undefined
  }
}
