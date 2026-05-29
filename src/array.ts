import { defineConfig } from 'eslint/config'

export const stylistic = defineConfig({
  rules: {
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
        readonly: 'generic'
      }
    ],
    '@stylistic/array-bracket-newline': ['error', { multiline: true }],
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': ['error', 'never']
  }
})
