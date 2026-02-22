import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/clashculator/',
  plugins: [vue()],
    css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or 'modern'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
