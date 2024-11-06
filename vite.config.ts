import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/chastitycagesizing/', // Add this line with your repository name as the base
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
