import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      server: {
        hmr: {
          overlay: false
        }
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion', 'lottie-react']
      }
    }
  } else {
    // Build configuration
    return {
      plugins: [react()],
      build: {
        target: 'es2015',
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        },
        rollupOptions: {
          treeshake: true,
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              animations: ['framer-motion', 'lottie-react'],
              icons: ['react-icons', 'lucide-react']
            }
          }
        }
      }
    }
  }
})