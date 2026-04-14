import { defineConfig } from 'eslint/config'

export const recommended = defineConfig({
  rules: {
    '@typescript-eslint/no-implied-eval': 'error'
  }
})
