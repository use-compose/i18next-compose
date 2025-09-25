import { defineConfig, defineProject } from 'vitest/config';

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
      defineProject({
        test: {
          name: 'unit',
          include: ['**/*.unit.test.ts'],
          environment: 'node',
        },
      }),
      defineProject({
        test: {
          name: 'integration',
          include: ['**/*/tests/integration/**/*.integration.test.ts', '**/*.integration.test.ts'],
          environment: 'happy-dom',
          testTimeout: 30_000,
          sequence: { concurrent: false }, // safer for shared deps
        },
      }),
    ],
  },
});
