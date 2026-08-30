// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const isBuild = process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://idp-hijuelas.cl',

  adapter: vercel({
    webAnalytics:{ enabled: true },
    imageService:true
  }),

  build: {
    inlineStylesheets: 'auto',
  },


  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: isBuild ? ['sanitize-html', 'htmlparser2'] : [],
    },
  },

  integrations: [sitemap()]


});