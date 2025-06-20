// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { env } from './src/config/env';

// https://astro.build/config
export default defineConfig({
    site: env.SITE_URL,
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react(), sitemap()],
});
