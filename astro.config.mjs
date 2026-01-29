import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig} from 'astro/config';
import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.sitedomain.com',
  output: 'server',
  image: {
    domains: ['cdn.sanity.io']
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sanity({
    projectId: 'f732bn2a',
    dataset: 'production',
    apiVersion: '2025-03-23',
    useCdn: false,
    studioUrl: '/studio'
  }), sitemap(), icon(), react(), favicons()],
  adapter: netlify()
});
