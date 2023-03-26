/**
 * Capitalize the first letter of a string.
 */
export function capitalize<const S extends string>(str: S): Capitalize<S> {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<S>
}
