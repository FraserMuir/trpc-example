/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../node_modules/.vite',
  test: {
    cache: {
      dir: '../node_modules/.vitest',
    },
    environment: 'jsdom',
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        target: 'http://localhost:4000',
      },
    },
  },
});
