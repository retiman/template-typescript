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
    '@typescript-eslint/comma-dangle': 'off',
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
    // See https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
    'import/prefer-default-export': 'off',
  },
  ignorePatterns: [
    "build",
    "coverage",
    "dist",
    "node_modules"
  ]
};
