# eslint-config-werk85

## Install

```sh
yarn add -D eslint eslint-config-werk85 jiti
```

`jiti` is required to write TypeScript configuration files (`*.ts`). See also [official documentation](https://eslint.org/docs/latest/use/configure/configuration-files#typescript-configuration-files).

## Imports

We offer different eslint configs which can be combined on demand. Similar to eslint and other eslint configs we provide `recommended` and `stylistic` configs. The `recommended` configs contain rules which help to improve the code to be more robust and secure. The `stylistic` configs contain only formatting rules with the main purpose to enforce a consistent code style.

| `exports`   | recommended | stylistic | |
|-------------|-------------|-----------|-|
| `.`         | ✅ | ✅ | Common rules appropriate in general for all files. |
| `/react`    | ✅ | ✅ | Mainly when working with react, i.e. for `.tsx` files. |
| `/jest`     | ✅ | ✅ | For test files `*.test.*` in combination with `jest`. |
| `/fp-ts`    | ✅ | ➖ | For functional programming with the `fp-ts` ecosystem. |
| `/prettier` | ➖ | ✅ | `prettier` rules must be added last to the config because it disables conflicting rules. |
| `/restricted-imports` | ➖ | ➖ | contains predefined configs for the rule [`no-restricted-imports`](https://typescript-eslint.io/rules/no-restricted-imports/) |

We include the following plugins:

* [eslint](https://eslint.org/docs/latest/rules/)
* [typescript-eslint](https://typescript-eslint.io/rules/)
* [eslint stylistic](https://eslint.style/packages/default)
* [perfectionist](https://perfectionist.dev/)
* [prettier](https://github.com/prettier/eslint-plugin-prettier)
* [react](https://github.com/jsx-eslint/eslint-plugin-react)
* [react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
* [jest](https://github.com/jest-community/eslint-plugin-jest)

Additional plugins of interest might be:

* [deprecation](https://github.com/gund/eslint-plugin-deprecation)

Please consult the documentation of each plugin for further rule explanation.

## Usage

Create a `eslint.config.ts` config file in the root of your project for common rules with the following content.

``` js
import werk85 from 'eslint-config-werk85'
import prettier from 'eslint-config-werk85/prettier'
import { defineConfig } from 'eslint/config'


const config = defineConfig(
  {
    ignores: [/* array of paths to be ignored */]
  }
  werk85.recommended,
  werk85.stylistic,
  prettier.stylistic,
  // add additional configs if necessary
)

export default config
```

### Extending Specific Rules

ESLint looks for a `eslint.config.ts` config file (`.js` and `cjs` extensions are fine as well) starting from the the directory of the file to be linted. If no config is found ESLint propagates upwards the path tree until a config is found.

We suggest to configure specific rules in the folder where required. Such a config must import the root config and may extends specific rules.

In the following we assume a monorepo with a package `app` containing react components. Therefore, we want to add rules for react and those rules should be applied only to files in the `app` package. It is sufficient to specify only react rules knowing that the root config contains already common rules.

``` js
// packages/app/eslint.config.package.ts
import react from 'eslint-config-werk85/react'
import { defineConfig } from 'eslint/config'
import configRoot from '../../eslint.config'

const config = defineConfig(
  configRoot,
  react.recommended,
  react.stylistic,
  {
    ignores: [
      /* array of paths to be ignored relative to the app package */
    ]
  }
)

export default config
```

## Linting Scripts

When multiple linters are used (e.g. `eslint` and `tsc`) then we recommend to use [concurrently](https://github.com/open-cli-tools/concurrently) in combination with wildcards. Add the following scripts to your `package.json` file.

```json
{
  "lint": "concurrently \"yarn:lint:*\"",
  "lint:es": "eslint .",
  "lint:tsc": "tsc -p ./tsconfig.json",
  "fix": "yarn lint:es --fix",
}
```

## VSCode Integration

If you use VSCode install the [ESLint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and make sure the following configurations is added to your `settings.json`. You can access the settings by pressing `CMD + ,` on your keyboard or by clicking on the `Open Settings (JSON)` icon in the upper right corner.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "javascript.format.enable": false,
  "typescript.format.enable": false,
}
```

This enables the automatic fixing of errors on save and enables eslint to validate typescript files.

## Troubleshooting

### ESLint does not work in VSCode

Sometimes it may happen that the eslint extension is not up-to-date with the latest config or even crashes when the config is broken. When the updated configs are not in sync then usually it is sufficient to restart the eslint server via `ESLint: Restart ESLint Server` to reload the config.

When the config file has been modified with invalid code or a broken rule has been added it results in a crash of the extension. In that case fix the config. Then the eslint extension must be restarted with `Developer: Restart Extension Host`. If the code is valid then everything should work fine. Try for instance adding multiple empty lines to check if some eslint errors are shown. If no errors are shown it means that there is still something wrong with the config.

Unfortunately VSCode does not show why the extension has crashed. For debugging use `yarn eslint .` to start the linter. If there are problems with the config it will print errors which will help you to locate the problem.

Restarting VSCode may be a last option.

### ESLint does not fix a fixable problem

When eslint identifies a problem which is fixable (usually a stylistic rule) but does not fix it on save (or via `yarn fix`) then it usually means that there are conflicting rules. In the best case eslint will report problems from multiple rules directly identifying the conflicting rules. Sometimes it may be tedious to identify the conflicting rules because another problem arises only after the fix of the first rule. Then the second rule kicks in and reverts the fix (or kind of) such that a problem is reported only from the first rule. In those case it may help disable the first rule and modify the code manually according to the first rule and then check what the second conflicting rule might be.
