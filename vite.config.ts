// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'client', // Vite projesi client klasöründe
  build: {
    outDir: '../dist/client', // Sunucunun okuyacağı yer
    emptyOutDir: true,
  },
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
    },
  },
});
