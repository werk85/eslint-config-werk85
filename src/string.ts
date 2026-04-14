import { defineConfig } from 'eslint/config'

export const stylistic = defineConfig({
  rules: {
    // quotes
    '@stylistic/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true
      }
    ],
    '@stylistic/quote-props': [
      'error',
      'consistent-as-needed',
      {
        numbers: true,
        unnecessary: true
      }
    ],

    // template strings
    '@stylistic/template-curly-spacing': ['error', 'never'],
    '@stylistic/template-tag-spacing': ['error', 'never'],
    '@typescript-eslint/no-unnecessary-template-expression': 'error',

    // concatenations
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error'
  }
})
