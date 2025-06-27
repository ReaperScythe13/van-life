import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugins: [
		react()
	],
	build: {
    outDir: 'dist',  // Where Vite puts built files
    emptyOutDir: true,
  },
  publicDir: 'public'
})
