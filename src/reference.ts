import { defineConfig } from 'eslint/config'

export const stylistic = defineConfig({
  rules: {
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/no-whitespace-before-property': ['error']
  }
})
