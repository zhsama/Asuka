import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// 从环境变量获取站点URL，默认为开发环境URL
const SITE_URL = process.env.PUBLIC_SITE_URL || 'http://localhost:4322';

// https://astro.build/config
export default defineConfig({
    site: SITE_URL,
    server: {
        port: 4322,
        host: true
    },
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': '/src'
            }
        }
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
