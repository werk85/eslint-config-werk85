import { defineConfig } from 'eslint/config'

export const stylistic = defineConfig({
  rules: {
    // parentheses
    '@stylistic/no-extra-parens': [
      'error',
      'all',
      {
        ignoreJSX: 'all'
      }
    ],
    '@stylistic/space-in-parens': ['error', 'never'],

    // semicolon
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/semi-spacing': ['off'],
    '@stylistic/semi-style': ['off'],
    '@stylistic/no-extra-semi': ['off'],

    // comma
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],
    '@stylistic/comma-style': ['error', 'last'],

    // decimal
    '@stylistic/no-floating-decimal': ['error'],

    // regex
    '@stylistic/wrap-regex': ['error']
  }
})
