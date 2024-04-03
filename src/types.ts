// Convenient definition for an optional type.
export type Optional<T> = T | undefined;

// Useful for defining a type based off another one, except one of the fields is required.
export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;

// See https://www.typescriptlang.org/docs/handbook/mixins.html
//
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericConstructor<T = any> = new (...args: any[]) => T;

// Defines a constraining type such that each key (K) in type T must have the same value as K.
//
// Useful for ensuring that a string enum has the same value as the key.  Enums are also indexed by number, so it's
// useful to exclude numerical keys from this check via Exclude<keyof T, number>.
//
// For example, this would result in a compile time error:
//
// <code>
// enum E { Foo = 'Bar' };
// type _ = MirrorConstraint<typeof E>;
// </code>
export type MirrorConstraint<T extends { [K in Exclude<keyof T, number>]: K }> = T;

// Defines a new type with exactly/at most/at least one of one of the keys.  Uses a convenience type called "Expode",
// which explodes a type unto a union of multiple types.
type Explode<T> = keyof T extends infer K
  ? K extends unknown
    ? { [I in keyof T]: I extends K ? T[I] : never }
    : never
  : never;

export type AtMostOneOf<T> = Explode<Partial<T>>;
export type AtLeastOneOf<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];
export type ExactlyOneOf<T> = AtMostOneOf<T> & AtLeastOneOf<T>;
