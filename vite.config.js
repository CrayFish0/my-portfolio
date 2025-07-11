import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    allowedHosts: ['my-portfolio-wgum.onrender.com']
  }
})
