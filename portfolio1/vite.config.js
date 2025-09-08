import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        background: "#f9f6f1",   // Very light sand
        foreground: "#26221f",   // Dark brown text
        primary: "#654b35",      // Earth brown
        secondary: "#e6dfd4",    // Light sand
        accent: "#d4b98c",       // Warm sand accent
      },
    },
  },
  plugins: [react(), tailwindcss(),],
})
