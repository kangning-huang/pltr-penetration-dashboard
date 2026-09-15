import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://kangning-huang.github.io/pltr-penetration-dashboard/
export default defineConfig({
  plugins: [react()],
  base: '/pltr-penetration-dashboard/',
})
