import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },

  test: {
    environment: 'jsdom',
    // Constructing jsdom per test file dominated the run. vmThreads builds one jsdom per worker
    // and gives each file a fresh VM context and `window`, so per-file isolation is preserved.
    pool: 'vmThreads',
    include: ['src/**/*.{test,spec}.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,vue}'],
      exclude: ['src/**/__tests__/**', 'src/**/*.stories.ts', 'src/**/*.d.ts', 'src/types.ts', 'src/index.ts'],
    },
  },
})
