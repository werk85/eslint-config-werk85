// This file contains some predefined import restriction to be used whenever
// needed. The restrictions are to be used in combination with the
// `@typescript-eslint/no-restricted-imports` rule [1] since eslint does not
// extend rule configuration. The schema is the same as in the original
// `no-restricted-imports` rule [2].
//
// [1] https://typescript-eslint.io/rules/no-restricted-imports/
// [2] https://eslint.org/docs/latest/rules/no-restricted-imports

/**
 * The following restrictions should be applied globally to enforce usage of
 * @werk85/prelude.
 */
export const inFavorOfWerk85Prelude = {
  paths: [
    {
      name: '@devexperts/remote-data-ts',
      message: 'Please import `RD` from `@werk85/prelude`'
    }
  ],
  patterns: [
    {
      group: ['fp-ts', 'fp-ts-std', 'fp-ts-contrib', '!@werk85/prelude/fp-ts', '!*/fp-ts'],
      message: 'Please import from `@werk85/prelude`'
    },
    {
      group: ['fp-ts-rxjs', 'rxjs', '!@werk85/prelude/fp-ts-rxjs', '!*/fp-ts-rxjs'],
      message: 'Please import `Rx` from `@werk85/prelude`'
    }
  ]
}

/**
 * To be used in packages where usage of `@packages/prelude` must be enforced.
 */
export const inFavorOfPackagePrelude = {
  paths: [
    {
      name: '@werk85/prelude',
      message: 'Please import from local monorepo package `@packages/prelude`'
    }
  ]
}

/**
 * Restricts the import of subpaths. Instead, better import from the package
 * root such that importing information from package.json are used. In that case
 * it will be automatically imported from `esm` (or `es6`) when in an ESM
 * environment and from `lib` when in a CommonJS (Node) environment.
 */
export const inFavourOfRoot = {
  patterns: [
    {
      group: ['*/lib/*'],
      message: 'Use the non lib import instead'
    }
  ]
}
