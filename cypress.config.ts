import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 3001,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
    indexHtmlFile: 'client/index.html',
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
