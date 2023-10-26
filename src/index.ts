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