import { defineConfig } from 'eslint/config'

export const recommended = defineConfig({
  rules: {
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ]
  }
})

export const stylistic = defineConfig({
  rules: {
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'error',
      {
        allowComparingNullableBooleansToFalse: true
      }
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@stylistic/operator-linebreak': [
      'error',
      'before',
      {
        // For assignments we want the assign operator (=) to be on the same
        // line. May be in conflict with prettier when exceeding line width.
        overrides: { '=': 'none' }
      }
    ],
    '@stylistic/space-infix-ops': ['error'],
    '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
    '@stylistic/no-mixed-operators': ['error']
  }
})
