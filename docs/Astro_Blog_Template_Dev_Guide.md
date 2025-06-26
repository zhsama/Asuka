# Astro 博客开发与定制指南

本文档旨在指导开发者如何基于 `apps/blog` 中现有的 Astro 博客进行修改、扩展和定制。我们将借鉴两个现有模板（`radish_garden-master` 和 `asuka-main`）的最佳实践来增强当前博客的功能。

## 1. 现有项目结构

`apps/blog` 目录已经包含一个功能齐全的 Astro 项目。其结构如下，这也是我们进行后续开发的基础：

```
apps/blog/
├── public/                  # 静态资源 (favicon, images, etc.)
├── src/
│   ├── components/          # 可复用组件 (.astro, .tsx, .svelte)
│   ├── content/             # 内容集合
│   │   ├── blog/            # 博客文章 (Markdown 文件)
│   │   └── config.ts        # 内容集合的定义和 schema
│   ├── layouts/             # 页面布局
│   ├── pages/               # 页面和路由
│   ├── styles/              # 全局样式
│   └── utils/               # 工具函数
├── astro.config.mjs         # Astro 配置文件
├── package.json
└── tsconfig.json
```

## 2. 内容管理 (Content Collections)

Astro 的 `Content Collections` 是管理博客文章的最佳方式，它能提供类型安全和自动化的数据校验。当前项目已经配置好了内容集合。

### 2.1. 修改文章 Schema

如果你想为文章添加新的属性（例如，封面图片 `cover`），你可以修改 `apps/blog/src/content/config.ts` 文件。

```typescript
// apps/blog/src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    // 在这里添加新字段
    cover: z.string().optional(), 
    author: z.string().default('Your Name'),
    // ... 其他你需要的字段
  }),
});

export const collections = {
  'blog': blogCollection,
};
```

### 2.2. 创建或编辑文章

在 `apps/blog/src/content/blog/` 目录下创建或编辑 Markdown (`.md` 或 `.mdx`) 文件。文件的 frontmatter 必须符合你在 `config.ts` 中定义的 schema。

```markdown
---
title: "我的第一篇博客"
description: "这是我的第一篇使用 Astro 创建的博客文章。"
published: 2024-01-01
tags: ["Astro", "WebDev"]
category: "技术"
cover: "/images/blog/my-first-post.jpg" # 新增的封面图片字段
---

## 欢迎

这是文章的正文部分...
```

## 3. 页面与路由

### 3.1. 博客列表页 (带分页)

为了在首页或博客归档页展示所有文章，并实现分页，你可以使用 Astro 的 `paginate()` 函数。

在 `apps/blog/src/pages/blog/[...page].astro` 创建一个动态路由（如果尚不存在）：

```astro
---
// apps/blog/src/pages/blog/[...page].astro
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import PostCard from '../../components/PostCard.astro';
import Pagination from '../../components/Pagination.astro';

// 1. 获取所有已发布的文章并排序
const allPosts = await getCollection('blog', ({ data }) => {
  return data.draft !== true;
});
const sortedPosts = allPosts.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

// 2. 使用 paginate() 函数生成静态路径
export async function getStaticPaths({ paginate }) {
  return paginate(sortedPosts, { pageSize: 10 });
}

// 3. 获取当前页的数据
const { page } = Astro.props;
---
<Layout title="博客">
  <div class="posts-list">
    {page.data.map(post => <PostCard post={post} />)}
  </div>
  <Pagination page={page} />
</Layout>
```

**注意**: 你需要创建或修改 `PostCard.astro` 和 `Pagination.astro` 组件来渲染文章卡片和分页链接。

### 3.2. 单篇文章页

为每篇博客文章生成一个单独的页面。在 `apps/blog/src/pages/blog/[slug].astro` 创建动态路由：

```astro
---
// apps/blog/src/pages/blog/[slug].astro
import { getCollection, type CollectionEntry } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const allPosts = await getCollection('blog');
  return allPosts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

type Props = {
  post: CollectionEntry<'blog'>;
}

const { post } = Astro.props;
const { Content } = await post.render();
---
<Layout title={post.data.title}>
  <article>
    <h1>{post.data.title}</h1>
    <p>{post.data.description}</p>
    <hr />
    <Content />
  </article>
</Layout>
```

`[slug].astro` 中的 `post.slug` 会自动根据文件名生成。`post.render()` 会将 Markdown 转换成 HTML。

## 4. 高级功能

### 4.1. 标签和分类页

你可以通过类似的方法为每个标签和分类创建列表页。

-   `apps/blog/src/pages/tags/[tag].astro`: 列出所有包含特定 `tag` 的文章。
-   `apps/blog/src/pages/categories/[category].astro`: 列出所有属于特定 `category` 的文章。

在 `getStaticPaths` 中，你需要先收集所有的标签和分类，去重，然后为每一个生成一个页面。

### 4.2. RSS 订阅

Astro 提供了官方的 `@astrojs/rss` 包来轻松生成 RSS feed。如果项目中还未添加，可以运行：

```bash
pnpm --filter blog add @astrojs/rss
```

然后，在 `apps/blog/src/pages/rss.xml.ts` 中：

```typescript
// apps/blog/src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'; // 你可能需要创建这个文件来存储站点信息

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
```

### 4.3. 站内搜索

`asuka-main` 项目集成 `Pagefind` 提供了出色的客户端搜索体验。你也可以在你的项目中集成它。

1.  安装 `pagefind`：`npm i -g pagefind`
2.  在 `package.json` 的 `scripts` 中添加构建脚本: `"postbuild": "pagefind --site dist/` (注意 Astro 的输出目录)
3.  在你的布局或组件中，添加 `data-pagefind-body` 等属性来告诉 Pagefind 索引哪些内容。
4.  参考 [Pagefind 文档](https://pagefind.app/) 添加搜索 UI。

## 5. 总结

通过以上步骤，你可以对现有的 Astro 博客进行深度定制和功能增强。核心在于利用 Astro 的内容集合进行类型安全的内容管理，并利用其基于文件的路由和静态站点生成能力来创建高性能的页面。从 `radish_garden-master` 中我们可以学习到如何集成 React 并实现客户端交互功能，而 `asuka-main` 则展示了如何构建一个功能完备、支持分页、多语言、搜索等高级功能的复杂站点。 