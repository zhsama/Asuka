// 博客相关的工具函数

import type { BlogPost, BlogTag, BlogCategory, BlogArchive, BlogFilterOptions, PaginationInfo } from '@/types/blog';

// 模拟博客数据 - 在实际项目中，这些数据应该来自 CMS 或 Markdown 文件
export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Astro 5.0 新特性深度解析',
    description: '探索 Astro 5.0 带来的革命性变化，包括新的服务器端渲染能力和性能优化。',
    content: `# Astro 5.0 新特性深度解析

Astro 5.0 是一个重大的版本更新，带来了许多令人兴奋的新特性...

## 主要新特性

### 1. 改进的服务器端渲染
- 更快的构建速度
- 更好的 SEO 支持
- 增强的静态生成能力

### 2. 新的组件系统
- 更灵活的组件组合
- 改进的类型安全
- 更好的开发体验

## 总结

Astro 5.0 是一个值得升级的版本...`,
    author: 'zhsama',
    publishDate: new Date('2024-01-15'),
    updateDate: new Date('2024-01-16'),
    tags: ['Astro', 'Web开发', '前端'],
    category: '技术分享',
    slug: 'astro-5-new-features',
    featured: true,
    draft: false,
    coverImage: '/images/blog/astro-5.jpg',
    readingTime: 8
  },
  {
    id: '2',
    title: '构建现代化的赛博朋克风格网站',
    description: '使用 Tailwind CSS 和现代前端技术创建具有赛博朋克美学的网站设计。',
    content: `# 构建现代化的赛博朋克风格网站

赛博朋克风格的网站设计正在成为一种流行趋势...

## 设计原则

### 1. 色彩搭配
- 霓虹色彩的使用
- 高对比度设计
- 暗色主题

### 2. 动画效果
- 故障艺术效果
- 霓虹灯闪烁
- 矩阵雨动画

## 实现技巧

使用 CSS 和 JavaScript 创建引人注目的视觉效果...`,
    author: 'zhsama',
    publishDate: new Date('2024-01-10'),
    tags: ['CSS', '设计', '赛博朋克', 'UI/UX'],
    category: '设计',
    slug: 'cyberpunk-website-design',
    featured: false,
    draft: false,
    coverImage: '/images/blog/cyberpunk-design.jpg',
    readingTime: 12
  },
  {
    id: '3',
    title: 'React 19 新特性预览',
    description: 'React 19 即将发布，让我们来看看有哪些令人期待的新特性和改进。',
    content: `# React 19 新特性预览

React 19 带来了许多激动人心的新特性...

## 主要更新

### 1. 并发特性
- 改进的 Suspense
- 新的 useTransition Hook
- 更好的性能优化

### 2. 服务器组件
- 零 JavaScript 组件
- 更好的 SEO
- 减少包大小

## 迁移指南

如何从 React 18 升级到 React 19...`,
    author: 'zhsama',
    publishDate: new Date('2024-01-05'),
    tags: ['React', 'JavaScript', '前端'],
    category: '技术分享',
    slug: 'react-19-preview',
    featured: true,
    draft: false,
    readingTime: 6
  },
  {
    id: '4',
    title: 'TypeScript 5.3 实用技巧',
    description: 'TypeScript 5.3 版本中的实用技巧和最佳实践，提升你的开发效率。',
    content: `# TypeScript 5.3 实用技巧

TypeScript 5.3 引入了许多实用的新特性...

## 新特性介绍

### 1. 改进的类型推断
- 更智能的类型推断
- 减少显式类型注解
- 更好的错误提示

### 2. 新的工具类型
- 更多内置工具类型
- 改进的条件类型
- 更好的模板字面量类型

## 实践建议

在实际项目中如何应用这些新特性...`,
    author: 'zhsama',
    publishDate: new Date('2023-12-28'),
    tags: ['TypeScript', 'JavaScript', '开发工具'],
    category: '技术分享',
    slug: 'typescript-5-3-tips',
    featured: false,
    draft: false,
    readingTime: 10
  },
  {
    id: '5',
    title: '我的 2023 年终总结',
    description: '回顾 2023 年的学习和成长历程，分享一些心得体会和未来规划。',
    content: `# 我的 2023 年终总结

2023 年即将结束，是时候回顾一下这一年的收获...

## 技术成长

### 学习的新技术
- Astro 框架
- Rust 编程语言
- Docker 容器化
- 微服务架构

### 完成的项目
- 个人博客网站
- 开源组件库
- 企业级管理系统

## 个人感悟

这一年最大的收获是...

## 2024 年规划

新的一年，我计划...`,
    author: 'zhsama',
    publishDate: new Date('2023-12-31'),
    tags: ['年终总结', '个人成长', '规划'],
    category: '生活感悟',
    slug: '2023-year-end-summary',
    featured: false,
    draft: false,
    readingTime: 5
  },
  {
    id: '6',
    title: 'Tailwind CSS 4.0 新特性详解',
    description: 'Tailwind CSS 4.0 带来了革命性的变化，包括新的引擎、更好的性能和全新的开发体验。',
    content: `# Tailwind CSS 4.0 新特性详解

Tailwind CSS 4.0 是一个重大的版本更新，带来了许多令人兴奋的新特性和改进...

## 主要新特性

### 1. 全新的引擎
- 基于 Rust 的新引擎
- 更快的编译速度
- 更小的包体积

### 2. 改进的开发体验
- 更好的 IntelliSense 支持
- 实时预览功能
- 增强的错误提示

### 3. 新的实用类
- 容器查询支持
- 新的动画类
- 改进的响应式设计

## 迁移指南

从 Tailwind CSS 3.x 升级到 4.0 的详细步骤...

## 性能对比

新版本在各个方面的性能提升...`,
    author: 'zhsama',
    publishDate: new Date('2024-01-20'),
    tags: ['Tailwind CSS', 'CSS', '前端', '工具'],
    category: '技术分享',
    slug: 'tailwind-css-4-new-features',
    featured: true,
    draft: false,
    coverImage: '/images/blog/tailwind-4.jpg',
    readingTime: 7
  },
  {
    id: '7',
    title: '深入理解 Web Components',
    description: 'Web Components 是现代 Web 开发的重要技术，让我们深入了解其原理和应用。',
    content: `# 深入理解 Web Components

Web Components 是一套不同的技术，允许您创建可重用的定制元素...

## 核心技术

### 1. Custom Elements
- 定义自定义 HTML 元素
- 生命周期回调
- 属性和方法

### 2. Shadow DOM
- 封装样式和结构
- 样式隔离
- 事件处理

### 3. HTML Templates
- 可重用的 HTML 模板
- slot 机制
- 动态内容

## 实际应用

在实际项目中如何使用 Web Components...

## 与框架的对比

Web Components vs React/Vue/Angular...`,
    author: 'zhsama',
    publishDate: new Date('2024-01-12'),
    tags: ['Web Components', 'JavaScript', '前端', '标准'],
    category: '技术分享',
    slug: 'understanding-web-components',
    featured: false,
    draft: false,
    readingTime: 15
  },
  {
    id: '8',
    title: 'CSS Grid 布局完全指南',
    description: 'CSS Grid 是现代 CSS 布局的强大工具，本文将全面介绍其使用方法和最佳实践。',
    content: `# CSS Grid 布局完全指南

CSS Grid Layout 是一个二维的布局系统，为 Web 提供了强大的布局能力...

## 基础概念

### 1. Grid Container 和 Grid Item
- 网格容器的定义
- 网格项目的特性
- 基本术语

### 2. 网格线和网格轨道
- 显式网格和隐式网格
- 网格线的命名
- 轨道大小的定义

### 3. 网格区域
- 命名网格区域
- 区域的合并
- 模板语法

## 实用技巧

### 响应式网格布局
- 使用 auto-fit 和 auto-fill
- minmax() 函数的应用
- 媒体查询的配合

### 常见布局模式
- 圣杯布局
- 卡片网格
- 杂志式布局

## 浏览器兼容性

Grid 在各个浏览器中的支持情况...`,
    author: 'zhsama',
    publishDate: new Date('2024-01-08'),
    tags: ['CSS', 'Grid', '布局', '前端'],
    category: '技术分享',
    slug: 'css-grid-complete-guide',
    featured: false,
    draft: false,
    coverImage: '/images/blog/css-grid.jpg',
    readingTime: 20
  },
  {
    id: '9',
    title: 'Node.js 性能优化实战',
    description: '分享 Node.js 应用性能优化的实用技巧和最佳实践，提升应用响应速度。',
    content: `# Node.js 性能优化实战

Node.js 应用的性能优化是一个复杂的话题，涉及多个层面...

## 性能分析

### 1. 性能监控工具
- Node.js 内置的 profiler
- 第三方监控工具
- 性能指标的解读

### 2. 瓶颈识别
- CPU 密集型任务
- I/O 阻塞问题
- 内存泄漏检测

## 优化策略

### 1. 代码层面优化
- 异步编程最佳实践
- 避免阻塞操作
- 合理使用缓存

### 2. 架构层面优化
- 负载均衡
- 微服务架构
- 数据库优化

### 3. 部署层面优化
- PM2 进程管理
- Docker 容器化
- CDN 加速

## 实际案例

通过具体案例展示优化效果...`,
    author: 'zhsama',
    publishDate: new Date('2024-01-03'),
    tags: ['Node.js', '性能优化', '后端', 'JavaScript'],
    category: '技术分享',
    slug: 'nodejs-performance-optimization',
    featured: false,
    draft: false,
    readingTime: 18
  },
  {
    id: '10',
    title: '我的开发工具箱 2024',
    description: '分享我在 2024 年使用的开发工具和配置，提升开发效率的秘密武器。',
    content: `# 我的开发工具箱 2024

作为一名前端开发者，选择合适的工具对提升开发效率至关重要...

## 编辑器和 IDE

### Visual Studio Code
- 必备插件推荐
- 自定义配置
- 快捷键设置

### WebStorm
- 智能代码补全
- 重构工具
- 调试功能

## 命令行工具

### 终端增强
- Oh My Zsh 配置
- 有用的别名设置
- 插件推荐

### 包管理器
- pnpm vs npm vs yarn
- 依赖管理最佳实践
- 私有包发布

## 设计和原型工具

### Figma
- 组件库管理
- 设计系统
- 协作流程

### 其他工具
- Sketch
- Adobe XD
- Principle

## 部署和运维

### CI/CD 工具
- GitHub Actions
- GitLab CI
- Jenkins

### 云服务
- Vercel
- Netlify
- AWS

## 总结

工具只是手段，关键在于如何高效使用...`,
    author: 'zhsama',
    publishDate: new Date('2023-12-25'),
    tags: ['开发工具', '效率', '工作流', '推荐'],
    category: '工具推荐',
    slug: 'my-dev-toolbox-2024',
    featured: false,
    draft: false,
    readingTime: 12
  }
];

// 获取所有博客文章
export function getAllPosts(): BlogPost[] {
  return mockBlogPosts.filter(post => !post.draft).sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

// 根据 slug 获取单篇文章
export function getPostBySlug(slug: string): BlogPost | undefined {
  return mockBlogPosts.find(post => post.slug === slug && !post.draft);
}

// 获取特色文章
export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
}

// 根据标签过滤文章
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

// 根据分类过滤文章
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

// 搜索文章
export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllPosts().filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.description.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// 获取所有标签
export function getAllTags(): BlogTag[] {
  const tagMap = new Map<string, number>();
  
  getAllPosts().forEach(post => {
    post.tags.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// 获取所有分类
export function getAllCategories(): BlogCategory[] {
  const categoryMap = new Map<string, number>();
  
  getAllPosts().forEach(post => {
    categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// 获取归档数据
export function getArchive(): BlogArchive[] {
  const posts = getAllPosts();
  const archiveMap = new Map<number, Map<number, BlogPost[]>>();

  posts.forEach(post => {
    const date = new Date(post.publishDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (!archiveMap.has(year)) {
      archiveMap.set(year, new Map());
    }
    
    const yearMap = archiveMap.get(year)!;
    if (!yearMap.has(month)) {
      yearMap.set(month, []);
    }
    
    yearMap.get(month)!.push(post);
  });

  return Array.from(archiveMap.entries())
    .map(([year, monthMap]) => ({
      year,
      months: Array.from(monthMap.entries())
        .map(([month, posts]) => ({ month, posts }))
        .sort((a, b) => b.month - a.month)
    }))
    .sort((a, b) => b.year - a.year);
}

// 根据过滤条件获取文章
export function getFilteredPosts(filters: BlogFilterOptions): BlogPost[] {
  let posts = getAllPosts();

  if (filters.tags && filters.tags.length > 0) {
    posts = posts.filter(post =>
      filters.tags!.some(tag => 
        post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
      )
    );
  }

  if (filters.category) {
    posts = posts.filter(post => 
      post.category.toLowerCase() === filters.category!.toLowerCase()
    );
  }

  if (filters.year) {
    posts = posts.filter(post => 
      new Date(post.publishDate).getFullYear() === filters.year
    );
  }

  if (filters.month) {
    posts = posts.filter(post => 
      new Date(post.publishDate).getMonth() + 1 === filters.month
    );
  }

  if (filters.featured !== undefined) {
    posts = posts.filter(post => post.featured === filters.featured);
  }

  if (filters.search) {
    posts = searchPosts(filters.search);
  }

  return posts;
}

// 分页处理
export function paginatePosts(posts: BlogPost[], page: number = 1, postsPerPage: number = 10): {
  posts: BlogPost[];
  pagination: PaginationInfo;
} {
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  
  return {
    posts: posts.slice(startIndex, endIndex),
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
      postsPerPage,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  };
}

// 获取相关文章
export function getRelatedPosts(post: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts().filter(p => p.id !== post.id);
  
  // 根据标签和分类计算相关性
  const scoredPosts = allPosts.map(p => {
    let score = 0;
    
    // 相同分类加分
    if (p.category === post.category) {
      score += 3;
    }
    
    // 相同标签加分
    const commonTags = p.tags.filter(tag => post.tags.includes(tag));
    score += commonTags.length * 2;
    
    return { post: p, score };
  });
  
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

// 格式化日期
export function formatDate(date: Date | string, locale: string = 'zh-CN'): string {
  const d = new Date(date);
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 格式化阅读时间
export function formatReadingTime(minutes: number): string {
  if (minutes < 1) return '< 1 分钟阅读';
  return `${minutes} 分钟阅读`;
}

// 生成文章摘要
export function generateExcerpt(content: string, maxLength: number = 150): string {
  // 移除 Markdown 标记
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // 移除标题标记
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗体标记
    .replace(/\*(.*?)\*/g, '$1') // 移除斜体标记
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // 移除链接，保留文本
    .replace(/`(.*?)`/g, '$1') // 移除行内代码标记
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + '...';
}