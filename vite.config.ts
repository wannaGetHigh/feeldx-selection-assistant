import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Development server settings
  server: {
    port: 3000,      // Custom port for 'npm run dev'
    strictPort: true // Prevents Vite from trying the next available port if 3000 is taken
  },
  // Production preview settings
  preview: {
    port: 3000,      // Custom port for 'npm run preview'
    strictPort: true
  }
})
