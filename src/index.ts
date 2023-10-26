// Test for @typescript-eslint/no-unused-vars.
//
// Any variable with _ should be exempted from being detected as an unused var.
export function eslintNoUnusedVars(_: string) {
  try {
    // eslint-disable-next-line no-empty
  } catch (_e) {
    // eslint-disable-next-line no-empty
  }
}

// Test for eslint/no-continue and eslint/no-plusplus
export function eslintNoContinue() {
  for (let i = 0; i < 10; i++) {
    continue;
  }
}
