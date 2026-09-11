import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      // Storybook-only files are not part of the public API, so they must not reach `dist`.
      // This overrides the tsconfig `exclude`, which deliberately keeps `src/stories` in scope
      // so the story assets and helpers are still type-checked by `npm run type-check`.
      exclude: ['src/**/__tests__/**', 'src/stories/**'],
    }),
  ],

  // The lib build has no use for `public/` — copying it only put an unreferenced favicon.ico
  // into `dist`, and so into the published package.
  publicDir: false,

  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      name: 'vuiii',
    },

    rollupOptions: {
      external: ['vue', 'vue-router'],
    },
  },

  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
})
