/// <reference types="vitest/config" />
import { defineConfig, PluginOption } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.{test,spec}.{js,ts}'],
  },
  build: {
    lib: {
      name: 'JsonCollection',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => format === 'es' ? 'index.js' : `index.${format}.js`,
    },
    rollupOptions: {
      external: ['mathjs'],
      output: {
        globals: {
          mathjs: 'mathjs',
        },
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    sourcemap: true,
  },
  plugins: [
    dts({
      outDir: 'dist',
      tsconfigPath: resolve(__dirname, 'tsconfig.json'),
      rollupTypes: true,
      insertTypesEntry: true,
    }) as PluginOption,
  ],
});