import eslint from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';

export default [
  eslint.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**'],
  },
  {
    // Configuración global
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    // Configuración específica para archivos Astro
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      astro: astro,
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },
];
