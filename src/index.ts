import { Linter } from 'eslint'

const config: Linter.Config = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'deprecation', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic',
            readonly: 'generic'
          }
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Array: {
                message: 'Use ReadonlyArray instead',
                fixWith: 'ReadonlyArray'
              },

              Map: {
                message: 'Use ReadonlyMap instead',
                fixWith: 'ReadonlyMap'
              },

              Set: {
                message: 'Use ReadonlySet instead',
                fixWith: 'ReadonlySet'
              }
            },
            extendDefaults: true
          }
        ],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: false
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false
            }
          }
        ],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/sort-type-union-intersection-members': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error'
      }
    }
  ],
  rules: {
    'deprecation/deprecation': 'warn',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'import/first': 'error',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-named-default': 'error',
    'import/no-relative-packages': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: ['.']
      }
    ],
    'object-shorthand': ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: true,
        printWidth: 130,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true
      }
    ]
  }
}

export = config
