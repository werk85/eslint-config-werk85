import { defineConfig } from 'eslint/config'

export const recommended = defineConfig({
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: ['.']
      }
    ],
    '@typescript-eslint/no-useless-empty-export': 'error'
  }
})

export const stylistic = defineConfig({
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        partitionByComment: true,
        newlinesBetween: 0,
        groups: [
          'type-import',
          ['value-builtin', 'value-external'],
          'type-internal',
          'value-internal',
          ['type-parent', 'type-sibling', 'type-index'],
          ['value-parent', 'value-sibling', 'value-index'],
          'ts-equals-import',
          'unknown'
        ]
      }
    ],
    'perfectionist/sort-named-imports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }]
  }
})
