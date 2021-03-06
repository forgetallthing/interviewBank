import {
  defineConfig
} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../interview-bank-server/views',
    emptyOutDir:true
  },
  server: {
    port: 5555,
    open: false,
    base: './',
    proxy: {
      '^/api': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});