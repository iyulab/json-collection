import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['dist/', 'node_modules/'],
  },
  {
    ...eslint.configs.recommended,
    ...tseslint.configs.recommended,
    files: ['src/**/*', 'tests/**/*'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'typescript-eslint/no-unused-vars': 'error',
      'typescript-eslint/no-explicit-any': 'warn',
      'typescript-eslint/prefer-const': 'error',
    },
  }
]);