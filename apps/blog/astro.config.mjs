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
import cloudflare from '@astrojs/cloudflare';
import vercel from '@astrojs/vercel/serverless';
import { remarkReadingTime } from './src/script/remark-reading-time.mjs';

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

export default defineConfig({
  site: deployTarget === 'vercel' ? 'https://blog.zhsama.vercel.app' : 'https://blog.zhsama.xyz',
  output: 'server',
  adapter: getAdapter(),
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