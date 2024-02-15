import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// To get version directly from the package.json
import * as pack from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: `v${pack.version}`,
})
