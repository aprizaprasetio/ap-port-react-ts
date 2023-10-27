import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unpluginInjectPreload from 'unplugin-inject-preload/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    unpluginInjectPreload({
      files: [
        {
          outputMatch: /[a-zA-Z]*-?[a-zA-Z]*-[a-z-0-9]*\.(png|svg)$/,
        }
      ]
    })
  ],
})
