/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.{test,spec}.{js,ts}'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    sourcemap: true,
    lib: {
      name: 'JsonCollection',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => format === 'es' ? 'index.js' : `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'mathjs'
      ],
      output: {
        globals: {
          mathjs: 'mathjs',
        },
      }
    },
  },
  plugins: [
    dts({
      include: ['src/**/*'],
      rollupTypes: true,
    }),
  ],
});