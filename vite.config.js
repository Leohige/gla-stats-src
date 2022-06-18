import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: [
        {find: "@", replacement: path.resolve(__dirname, 'src')}
    ]
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020"
    }
  },
  build: {
    target: "es2020",
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
})
