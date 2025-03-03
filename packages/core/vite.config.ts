import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],

  build: {
    lib: {
      entry: './src/index.ts',
      name: 'i18next-compose',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd'],
    },
    outDir: 'dist',
    emptyOutDir: true,
    // TODO: https://github.com/vitejs/vite/discussions/2978#discussioncomment-5276995 ?
    // generate .vite/manifest.json in outDir
    // manifest: true,
    // rollupOptions: {
    //   // overwrite default .html entry
    //   input: './index.html',
    // },
  },
});
