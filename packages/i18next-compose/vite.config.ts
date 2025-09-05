import path from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      entryRoot: './src',
      tsconfigPath: path.join(__dirname, './tsconfig.json'),
      include: ['./src/**/*'],
      outDir: './dist',
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: fileURLToPath(new URL('./src/', import.meta.url)) }],
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'i18next-compose',
      fileName: (format) => {
        if (format === 'es') return 'index.mjs';
        if (format === 'cjs') return 'index.cjs';
        return `index.${format}.js`;
      },
      formats: ['es', 'cjs'],
    },
    outDir: 'dist',
    emptyOutDir: true,
    // TODO: https://github.com/vitejs/vite/discussions/2978#discussioncomment-5276995 ?
    // generate .vite/manifest.json in outDir
    // manifest: true,
    rollupOptions: { external: ['@use-compose/i18next-core'] },
  },
});
