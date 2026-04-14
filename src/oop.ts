import { defineConfig } from 'eslint/config'

export const recommended = defineConfig({
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/parameter-properties': 'off'
  }
})
