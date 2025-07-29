import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMathjax from 'rehype-mathjax';
import tailwindcss from '@tailwindcss/vite';
import swup from '@swup/astro';
import icon from 'astro-icon';
import { remarkReadingTime } from './src/script/remark-reading-time.mjs';

const SITE_URL = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkMath, remarkReadingTime],
      rehypePlugins: [rehypeKatex, rehypeMathjax],
    }),
    sitemap(),
    icon(),
    swup({
      theme: false,
      containers: ["main", "footer", ".banner-inner"],
      smoothScrolling: true,
      progress: true,
      cache: true,
      preload: true,
      updateHead: true,
      updateBodyClass: false,
      globalInstance: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime],
    rehypePlugins: [rehypeKatex, rehypeMathjax],
  },
});
