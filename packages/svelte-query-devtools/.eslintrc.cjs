// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    extraFileExtensions: ['.svelte'],
  },
  rules: {
    'react-hooks/rules-of-hooks': 'off',
  },
  extends: ['plugin:svelte/recommended', '../../.eslintrc'],
  ignorePatterns: ['*.config.*', '**/build/*', '**/.svelte-kit/*'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
}

module.exports = config