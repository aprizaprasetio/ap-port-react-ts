import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import unpluginInjectPreload from 'unplugin-inject-preload/vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
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
