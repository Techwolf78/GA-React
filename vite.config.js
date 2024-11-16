import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';

export default {
  base: '/',  // Set base to '/' for production
  plugins: [
    react(),  // Vite React plugin
    Inspect(),  // Add the Inspect plugin here
  ],
};
