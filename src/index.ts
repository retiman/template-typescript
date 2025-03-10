// Test for @typescript-eslint/no-unused-vars.
//
// Any variable with _ should be exempted from being detected as an unused var.
export function eslintNoUnusedVars(_: string) {
  try {
  } catch (_e) {}
}

// Test for eslint/no-continue and eslint/no-plusplus
export function eslintNoContinue() {
  for (let i = 0; i < 10; i++) {
    continue;
  }
}

// Test for prettier/trailingComma
export const prettierTrailingComma = {
  foo: 1,
  bar: 2,
  baz: 3
};
