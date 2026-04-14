import * as werk85 from '@local/eslint-config-werk85'
import * as prettier from '@local/eslint-config-werk85/prettier'
import { defineConfig } from 'eslint/config'

const config = defineConfig(
  {
    ignores: ['.yarn', 'node_modules', 'dist']
  },
  werk85.recommended,
  werk85.stylistic,
  prettier.stylistic
)

export default config
