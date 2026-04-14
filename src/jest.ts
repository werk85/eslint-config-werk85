import eslintPluginJest from 'eslint-plugin-jest'
import { defineConfig } from 'eslint/config'

const files = ['**/*.test.{js,ts,jsx,tsx}']

export const recommended = defineConfig({
  files,
  plugins: { jest: eslintPluginJest },
  languageOptions: {
    globals: eslintPluginJest.environments.globals.globals
  },
  rules: {
    ...eslintPluginJest.configs['flat/recommended'].rules,
    'jest/expect-expect': 'error',
    'jest/no-hooks': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-lowercase-title': 'off',
    'jest/unbound-method': 'off'
  }
})

export const stylistic = defineConfig({
  files,
  ...eslintPluginJest.configs['flat/style']
})
