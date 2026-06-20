import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-first-react-app/', // 👈 リポジトリ名を指定してURLのズレを防ぐ
})