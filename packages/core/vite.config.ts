import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],

  build: {
    lib: {
      entry: './index.html',
      name: 'i18next-compose',
      fileName: 'index',
    },
    // TODO: https://github.com/vitejs/vite/discussions/2978#discussioncomment-5276995 ?
    // generate .vite/manifest.json in outDir
    // manifest: true,
    // rollupOptions: {
    //   // overwrite default .html entry
    //   input: './index.html',
    // },
  },
});
