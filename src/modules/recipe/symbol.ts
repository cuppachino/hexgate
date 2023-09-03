export const recipeSymbol: unique symbol = Symbol(
  'internal identifier for recipes created with createRecipe'
)

export const extractRecipeSymbol = <T extends Record<PropertyKey, any>>(
  fn: T
) =>
  Reflect.get(fn, recipeSymbol, fn) as T extends {
    [recipeSymbol]: infer U
  }
    ? U
    : unknown
