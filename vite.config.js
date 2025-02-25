import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';  // Change the import to 'tailwindcss'

export default defineConfig({
  base: '/',  // Set base to '/' for production
  plugins: [
    react(),  // Vite React plugin
    Inspect(),  // Add the Inspect plugin here
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],  // Add tailwindcss to PostCSS plugins
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
