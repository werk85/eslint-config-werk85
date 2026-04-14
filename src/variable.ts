import { defineConfig } from 'eslint/config'

export const recommended = defineConfig({
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn'
  }
})

export const stylistic = defineConfig({
  rules: {
    '@typescript-eslint/prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      }
    ],
    '@stylistic/one-var-declaration-per-line': ['off'],
    '@stylistic/rest-spread-spacing': ['error', 'never']
  }
})
