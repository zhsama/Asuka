import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import cloudflare from '@astrojs/cloudflare';
import vercel from '@astrojs/vercel/serverless';
import { env } from './src/config/env';

// 从环境变量获取部署目标
const deployTarget = process.env.DEPLOY_TARGET || 'cloudflare';

// 根据部署目标选择适配器
const getAdapter = () => {
  switch (deployTarget) {
    case 'vercel':
      return vercel({
        webAnalytics: {
          enabled: true,
        },
        imageService: true,
        imagesConfig: {
          sizes: [320, 640, 1280],
          domains: [],
        },
      });
    case 'cloudflare':
    default:
      return cloudflare({
        mode: 'directory',
        runtime: {
          mode: 'local',
          type: 'pages',
        },
      });
  }
};

// https://astro.build/config
export default defineConfig({
    site: deployTarget === 'vercel' 
        ? env.SITE_URL || 'https://me.zhsama.vercel.app' 
        : env.SITE_URL || 'https://me.zhsama.xyz',
    output: 'server',
    adapter: getAdapter(),
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