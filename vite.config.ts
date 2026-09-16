import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { reactRouter } from '@react-router/dev/vite'
import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [mdx(), tailwindcss(), reactRouter()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
