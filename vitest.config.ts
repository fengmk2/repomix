import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/index.ts'],
      reporter: ['text', 'json', 'html'],
    },
    watch: false,
    testTimeout: 15000,
  },
});
