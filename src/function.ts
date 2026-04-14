import { defineConfig } from 'eslint/config'

export const recommended = defineConfig({
  rules: {
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'property']
  }
})

export const stylistic = defineConfig({
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-paren-newline': ['error', 'consistent'],
    // disabled until some multiline/multiarrow support is added
    '@stylistic/implicit-arrow-linebreak': ['off'],
    '@stylistic/new-parens': ['error', 'always'],
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
})
