import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // projects: ['packages/*/vitest.config.{e2e,unit,*}.ts'],
    // projects: ['packages/*/vitest.config.ts'],
    projects: [
      'packages/*',
      {
        extends: true,
        test: {
          name: 'happy-dom',
          environment: 'happy-dom',
          globals: true,
        },
      },
    ],
  },
});
