import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',  // Set base to '/' for production
  plugins: [
    react(),  // Vite React plugin
    Inspect(),  // Add the Inspect plugin here
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Create a separate chunk for all node_modules (vendor code)
          if (id.includes('node_modules')) {
            return 'vendor'; // All third-party libraries in node_modules will go into a 'vendor' chunk
          }
        },
      },
    },
  },
});
