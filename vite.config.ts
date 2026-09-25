import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// './' keeps the build portable: it works on Vercel, Netlify and on a
// GitHub Pages project site (https://user.github.io/RepoName/) without
// having to hard-code the repository name.
export default defineConfig({
  plugins: [react()],
  base: './',
})
