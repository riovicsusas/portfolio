import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  plugins: [react(), tailwindcss()],
  build: {
    minify: true,
    outDir: 'assets/hero',
    emptyOutDir: true,
    lib: { entry: 'src/hero.tsx', formats: ['es'], fileName: () => 'hero.js', cssFileName: 'hero' },
  },
})
