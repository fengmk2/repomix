import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
  lint: {
    $schema: './node_modules/oxlint/configuration_schema.json',
    ignorePatterns: ['tests/integration-tests/**/*'],
  },
});
