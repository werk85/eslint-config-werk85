import { defineConfig } from 'eslint/config'

const difference =
  <A>(a: ReadonlyArray<A>) =>
  (b: ReadonlyArray<A>) =>
    a.filter(value => !b.includes(value))

const statements = [
  '*',
  'block-like',
  'cjs-export',
  'cjs-import',
  'directive',
  'expression',
  'iife',
  'multiline-block-like',
  'multiline-expression',
  'multiline-const',
  'multiline-let',
  'multiline-var',
  'singleline-const',
  'singleline-let',
  'singleline-var',
  'block',
  'empty',
  'function',
  'break',
  'case',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'do',
  'export',
  'for',
  'if',
  'import',
  'let',
  'return',
  'switch',
  'throw',
  'try',
  'var',
  'while',
  'with'
]

export const stylistic = defineConfig({
  rules: {
    // whitespace (spaces)
    // note: this rule has many issues but seems to be good enough
    '@stylistic/indent': ['error', 2],
    '@stylistic/indent-binary-ops': ['error', 2],
    '@stylistic/no-mixed-spaces-and-tabs': ['error'],
    '@stylistic/no-multi-spaces': ['error'],
    '@stylistic/no-trailing-spaces': ['error'],

    // whitespace (lines)
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/no-multiple-empty-lines': ['error'],
    '@stylistic/padding-line-between-statements': [
      'error',
      // enforce newline before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
      // enforce new line after last import statement
      {
        blankLine: 'always',
        prev: 'import',
        next: difference(statements)(['*', 'import'])
      },
      // enforce new line before first export statement
      {
        blankLine: 'always',
        prev: difference(statements)(['*', 'export']),
        next: 'export'
      }
    ]
  }
})
