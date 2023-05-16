import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    hmr: {
      clientPort: 3000 //need for hmr to work
    }
  },
  build: {
    target: 'esnext'
  }
})
