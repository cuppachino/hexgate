/**
 * "Fake" unique symbol used internally for additional type inference.
 * @internal
 */
declare const internalPhantomSymbol: unique symbol

/**
 * A unique symbol type used internally for additional type inference.
 * @internal
 */
export type PhantomSymbol = typeof internalPhantomSymbol

/**
 * Internal utility for dangerous type inference. Only use this if you know what you're doing.
 * If the type already has the symbol, it is returned as-is.
 * @see {@link PhantomError}
 */
export type Phantom<T, U = never> = T extends { [P in PhantomSymbol]?: [U] }
  ? T
  : T & { [P in PhantomSymbol]?: [U] }

/**
 * Convert the `Phantom` type to an interface
 * that can be implemented by a class.
 * @internal
 */
interface PhantomContainer<E> extends Phantom<unknown, E> {}

/**
 * "Fake" class for preventing indexed access
 * @internal
 */
declare class PhantomContainer<E> implements PhantomContainer<E> {}

/**
 * Intersect the internal hint type with the actual error type.
 * This allows us to add a hint to the error type, without affecting the actual error type.
 * @see {@link Phantom}
 */
export type PhantomError<
  Expect,
  ErrorType = unknown
> = PhantomContainer<Expect> & ErrorType
