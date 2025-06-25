// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { env } from './src/config/env';

// https://astro.build/config
export default defineConfig({
    site: env.SITE_URL,
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        react(),
        mdx({
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
            extendMarkdownConfig: true,
        }),
        sitemap(),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        shikiConfig: {
            theme: 'github-dark',
            wrap: true,
        },
    },
});
