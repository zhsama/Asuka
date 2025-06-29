# 🚀 Asuka - EVA主题博客与个人站点

<div align="center">
  <img src="apps/blog/public/avatar.jpeg" alt="Asuka Avatar" width="120" height="120" style="border-radius: 50%;" />
  
  <p>一个基于 Astro 构建的现代化 Monorepo 项目，包含 EVA 主题博客和赛博朋克风格个人站点</p>

  ![Astro](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
</div>

## ✨ 特色功能

### 🎨 EVA 主题系统
- **EVA-01 (初号机)** - 紫绿配色，默认主题
- **EVA-02 (二号机)** - 红橙配色，明日香风格  
- **EVA-00 (零号机)** - 蓝白配色，绫波丽风格
- 支持亮暗模式切换
- 实时主题预览

### 📝 博客功能
- 📚 分类和标签管理
- 🗂️ 归档页面
- 🔍 全文搜索
- 📱 响应式设计
- 🌐 国际化支持（中/英文）
- 📊 瀑布流布局
- 🔗 Hash URL 模式
- 📡 RSS 订阅

### 🔮 赛博朋克个人站点
- 🌈 多主题支持（Cyberpunk 2077、Matrix、Synthwave）
- 🌧️ 动态矩阵雨背景
- ⚡ 酷炫视觉效果
- 🎯 技能展示
- 📧 联系表单

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build/) + [React](https://reactjs.org/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **包管理**: [pnpm](https://pnpm.io/) + Workspace
- **代码质量**: [Biome](https://biomejs.dev/) + [Husky](https://typicode.github.io/husky/)
- **图标**: [Astro Icon](https://www.astroicon.dev/)
- **动画**: [Swup](https://swup.js.org/)

## 📁 项目结构

```
Asuka/
├── apps/
│   ├── blog/                 # 📝 EVA主题博客
│   │   ├── src/
│   │   │   ├── components/   # React组件
│   │   │   ├── content/      # 博客文章
│   │   │   ├── layouts/      # 页面布局
│   │   │   ├── pages/        # 路由页面
│   │   │   ├── styles/       # 样式文件
│   │   │   └── utils/        # 工具函数
│   │   ├── public/           # 静态资源
│   │   └── asuka.config.ts   # 博客配置
│   │
│   └── main/                 # 🔮 赛博朋克个人站点
│       ├── src/
│       │   ├── components/   # 组件库
│       │   ├── config/       # 配置文件
│       │   ├── React/        # React组件
│       │   └── styles/       # 样式文件
│       └── public/           # 静态资源
│
├── docs/                     # 📖 项目文档
├── templates/                # 📋 模板文件
└── package.json              # Monorepo配置
```

## 🚀 快速开始

### 环境要求
- Node.js >= 18
- pnpm >= 8

### 安装依赖
```bash
# 克隆项目
git clone https://github.com/zhsama/asuka.git
cd asuka

# 安装依赖
pnpm install
```

### 开发模式
```bash
# 同时启动两个应用
pnpm dev

# 或单独启动
pnpm dev:blog  # 博客 (localhost:4321)
pnpm dev:main  # 主站 (localhost:4322)
```

### 构建部署
```bash
# 构建所有应用
pnpm build

# 或单独构建
pnpm build:blog
pnpm build:main

# 预览构建结果
pnpm preview
```

## ⚙️ 配置说明

### 博客配置 (`apps/blog/asuka.config.ts`)
```typescript
const AsukaConfig = {
  title: "zhsama's blog",
  description: "I'm a frontend developer and AI enthusiast.",
  site: "https://blog.zhsama.xyz",
  avatarUrl: "/avatar.jpeg",
  slugMode: "HASH", // 启用Hash URL模式
  // ... 更多配置
}
```

### 主要配置项
- `slugMode`: URL模式 (`"HASH"` | `"RAW"`)
- `locale`: 语言设置 (`"zh-CN"` | `"en"`)
- `bannerStyle`: Banner样式 (`"LOOP"` | `"RANDOM"`)
- `waterfallColumns`: 瀑布流列数配置

## 🎨 主题使用

### EVA主题切换
博客支持三种EVA机体主题，可通过顶部主题切换器选择：

- **初号机**: 紫色主题，沉稳神秘
- **二号机**: 红色主题，热情活力  
- **零号机**: 蓝色主题，冷静理性

### 自定义主题
可通过修改 `apps/blog/src/styles/global.css` 自定义主题色彩：

```css
:root.eva-custom {
  --hue-primary: 180; /* 自定义主色调 */
  --hue-secondary: 60; /* 自定义辅助色 */
}
```

## 📝 写作指南

### 创建文章
在 `apps/blog/src/content/blog/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
published: 2024-01-01
category: "技术"
tags: ["Astro", "TypeScript"]
cover: "/images/cover.jpg"
draft: false
---

# 文章内容
```

### 支持的功能
- ✅ Markdown + MDX
- ✅ 数学公式 (KaTeX)
- ✅ 代码高亮
- ✅ 图片优化
- ✅ 目录生成

## 🌐 部署

### Vercel (推荐)
```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

### Netlify
```bash
# 构建命令
pnpm build

# 发布目录
dist/
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "preview"]
```

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

### 开发规范
- 使用 Conventional Commits 规范
- 代码自动格式化 (Biome)
- 提交前自动检查 (Husky + lint-staged)

## 📋 待办事项

- [ ] 移动端优化
- [ ] 评论系统
- [ ] 文章搜索增强
- [ ] PWA 支持
- [ ] SEO 优化

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源

## 🙏 致谢

- [Astro](https://astro.build/) - 现代化的静态站点生成器
- [Evangelion](https://www.evangelion.co.jp/) - 主题灵感来源
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架

---

<div align="center">
  <p>如果这个项目对你有帮助，请给个 ⭐️ 支持一下！</p>
  
  [🔗 在线预览](https://blog.zhsama.xyz) | [📚 文档](./docs/) | [🐛 报告问题](https://github.com/zhsama/asuka/issues)
</div>
