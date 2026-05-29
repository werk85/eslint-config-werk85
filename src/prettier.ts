import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

/**
 * Prettier follows the principle take-all-or-nothing. Hence it is important to
 * include those stylistic rules last because conflicting rules will be
 * disabled.
 */
export const stylistic = defineConfig(eslintPluginPrettier, {
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 130,
        // covered by @stylistic/arrow-parens
        arrowParens: 'avoid',
        // covered by @stylistic/semi
        semi: false,
        // covered by @stylistic/quotes
        singleQuote: true,
        // covered by @stylistic/quote-props
        quoteProps: 'consistent',
        // covered by @stylistic/comma-dangle
        trailingComma: 'none',
        // covered by @stylistic/comma-spacing
        bracketSpacing: true,
        bracketSameLine: true,
        // covered by @stylistic/jsx-quotes
        jsxSingleQuote: false
      }
    ],

    // Despite some few inconveniences prettier does a pretty good job. To
    // avoid conflicts we need to disable other stylistic rules for now.
    '@stylistic/indent-binary-ops': 'off', // short-circuit evaluation
    '@stylistic/no-trailing-spaces': 'off',
    '@stylistic/padded-blocks': 'off',
    '@stylistic/newline-per-chained-call': 'off',
    '@stylistic/array-bracket-newline': 'off',
    '@stylistic/function-paren-newline': 'off',
    '@stylistic/indent': 'off',
    '@stylistic/line-comment-position': 'off',
    '@stylistic/lines-around-comment': 'off',
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/multiline-ternary': 'off',
    '@stylistic/no-extra-parens': 'off',
    '@stylistic/operator-linebreak': 'off',
    '@stylistic/wrap-regex': 'off',
    '@stylistic/jsx-one-expression-per-line': 'off',
    '@stylistic/jsx-tag-spacing': 'off',
    '@stylistic/jsx-wrap-multilines': 'off',
    '@stylistic/jsx-curly-newline': 'off',
    '@stylistic/jsx-closing-bracket-location': 'off',
    '@stylistic/jsx-closing-tag-location': 'off'
  }
})
