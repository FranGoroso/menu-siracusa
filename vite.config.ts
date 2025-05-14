import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-i18next'],
            'ui-vendor': ['framer-motion'],
            'i18n-vendor': ['i18next', 'i18next-browser-languagedetector'],
          },
        },
      },
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    },
    server: {
      port: 3000,
      open: true,
      host: true,
    },
    preview: {
      port: 4173,
      open: true,
    },
    // Configuración de optimización
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'i18next']
    },
  };
});