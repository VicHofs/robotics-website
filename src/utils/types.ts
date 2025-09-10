// Utility Type Helpers
// ---------------------
// Maps each key in T to a `$`-prefixed key with the same value type.
export type Dollarize<T> = {
  [K in keyof T as `$${Extract<K, string>}`]: T[K];
};
