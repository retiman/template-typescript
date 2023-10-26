module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    // Disables rules that are handled by prettier already.
    //
    // See https://github.com/prettier/eslint-config-prettier
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['jest'],
  rules: {
    // Enabled because one should not assign the result of a void function.
    //
    // See https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_'
      }
    ],
    // Disabled because this rule cannot detect if a dependency is only for development.  For example, if you have a
    // postbuild.js and you include it in tsconfig.json, then this plugin will incorrectly assume that any packages
    // required there should be in dependencies.
    //
    // In that situation, postbuild.js is included in tsconfig.json so that JavaScript files (even ones not included
    // in the final build) should be linted according to @typescript-eslint.
    //
    // See https://stackoverflow.com/questions/61956555/why-is-typescript-eslint-parser-including-files-outside-of-those-configured-in
    // See https://www.typescriptlang.org/tsconfig#include
    'import/no-extraneous-dependencies': 'off',
    // Disabled because named exports are more explicit.
    //
    // See https://github.com/airbnb/javascript/issues/1365
    // See https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
    'import/prefer-default-export': 'off',
    // Disabled because we do want to have underscore prefixed identifiers to indicate a variable is ignored.
    //
    // See https://eslint.org/docs/latest/rules/no-underscore-dangle
    'no-underscore-dangle': 'off'
  },
  ignorePatterns: [
    "build",
    "coverage",
    "dist",
    "node_modules"
  ]
};
