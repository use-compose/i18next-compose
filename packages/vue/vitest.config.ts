import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [vue()],
    test: {
      environment: 'happy-dom',
      exclude: [...configDefaults.exclude, '**/e2e/**', '**/tests/e2e/**', '**/spec.ts'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      name: {
        label: 'vue',
        color: 'green',
      },
    },
  }),
);
