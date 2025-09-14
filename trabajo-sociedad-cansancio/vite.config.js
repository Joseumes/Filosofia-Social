import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Filosofia-Social/', // 👈 ¡ES CRUCIAL!
  build: {
    outDir: 'dist',
  },
});