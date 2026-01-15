import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    watch: false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
});
