import { defineConfig } from 'eslint/config'

export const recommended = defineConfig({
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface']
  }
})

export const stylistic = defineConfig({
  rules: {
    'object-shorthand': ['error', 'always'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    // this seems not to work properly for destructuring
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }]
  }
})
