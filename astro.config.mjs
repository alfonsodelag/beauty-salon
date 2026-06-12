// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sanity({
      projectId: 'jdls3x4j',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2026-06-12',
      studioBasePath: '/studio',
    }),
  ],
});
