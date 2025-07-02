# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Asuka is a monorepo containing two Astro-based applications:
- **Blog** (`apps/blog/`): EVA-themed blog with sophisticated theming system
- **Main** (`apps/main/`): Cyberpunk-style personal portfolio site

Both apps use Astro with React islands, Tailwind CSS, and TypeScript.

## Essential Commands

### Development
```bash
# Start both apps simultaneously
pnpm dev

# Start individual apps
pnpm dev:blog  # Blog at localhost:4321
pnpm dev:main  # Main at localhost:4322
```

### Building
```bash
# Build all apps
pnpm build

# Build individual apps
pnpm build:blog
pnpm build:main

# Preview production builds
pnpm preview
```

### Code Quality
```bash
# Format and lint code
pnpm format
pnpm lint

# Commits must follow conventional commit format
# Pre-commit hooks run automatically via Husky
```

## High-Level Architecture

### Monorepo Structure
- Uses pnpm workspaces defined in `pnpm-workspace.yaml`
- Apps in `apps/` directory operate independently but share root-level tooling
- Biome configuration at root and app level for linting/formatting

### Blog App Architecture

#### Content Management
- Content stored in `apps/blog/src/content/blog/` as MDX files
- Uses Astro Content Collections v2 with Zod schema validation
- Supports draft posts, categories, tags, and custom metadata
- Hash-based or raw slug generation configured in `asuka.config.ts`

#### EVA Theme System
The blog implements a sophisticated multi-theme system inspired by Evangelion:
- Theme files: `src/styles/global.css` defines CSS custom properties
- Three EVA themes: EVA-01 (purple/green), EVA-02 (red/orange), EVA-00 (blue/white)
- Uses `oklch` color space for precise color control
- Theme switcher component manages localStorage persistence and DOM updates

#### Layout Hierarchy
```
BaseLayout.astro (HTML structure, overflow control)
└── MainLayout.astro (Navigation, sidebar, footer)
    └── BlogLayout.astro (Article-specific layout)
        └── Content pages
```

#### Sticky Navigation System
- Navigation bar hides on scroll down, shows on scroll up
- Sticky elements (sidebar categories/tags, TOC) adjust position dynamically
- JavaScript in MainLayout coordinates sticky element positioning

#### Internationalization
- Translation system in `src/i18n/` with type-safe keys
- Language files in `src/i18n/lang/`
- Currently supports English and Chinese

### Main App Architecture

#### Cyberpunk Theme System
- Multiple themes: Cyberpunk 2077, Matrix, Synthwave, Vaporwave
- Dynamic visual effects (matrix rain, glitch effects)
- Theme configuration in `src/config/themes.ts`
- `ThemeManager` class handles theme switching and effects

### Shared Patterns

#### Component Organization
- Astro components for layout and static content
- React components in `React/` for interactive features
- UI primitives in `components/ui/` (Radix UI based)
- Widget components for reusable small units

#### Styling Approach
- Tailwind CSS v4 with Vite plugin
- Component-scoped styles in Astro components
- CSS custom properties for theming
- PostCSS for advanced transformations

#### Performance Optimizations
- Static site generation for all pages
- Lazy loading images with lozad
- Page transitions with Swup
- Search powered by Pagefind (client-side)

## Configuration Files

### Blog Configuration
`apps/blog/asuka.config.ts` controls:
- Site metadata and navigation
- Slug generation mode (HASH or RAW)
- Social links and author info
- Banner display settings
- Waterfall layout columns

### Environment Setup
- Node.js >= 18 required
- pnpm >= 8 for package management
- TypeScript strict mode enabled
- Astro check for type validation

## Working with Content

### Creating Blog Posts
Create MDX files in `apps/blog/src/content/blog/`:
```markdown
---
title: "Post Title"
description: "Description"
published: 2024-01-01
category: "Category Name"
tags: ["tag1", "tag2"]
cover: "/images/cover.jpg"
draft: false
---

Content here...
```

### Adding Banner Images
Place images in `apps/blog/public/banner/` and update config.

## Common Tasks

### Adding a New Theme (Blog)
1. Define color variables in `global.css` under new root class
2. Add theme option to theme switcher component
3. Update theme detection logic

### Modifying Navigation
1. Update `asuka.config.ts` navigators array
2. Add translation keys if needed

### Debugging Sticky Elements
Check for:
- Parent container overflow properties
- Sufficient height on parent containers
- Z-index conflicts
- Browser-specific sticky support

## TypeScript Patterns

### Type Imports
```typescript
import type { Configuration } from "@/types/config";
import type { MarkdownHeading } from "astro";
```

### Astro Component Props
```typescript
export interface Props {
  title: string;
  headings?: MarkdownHeading[];
}
const { title, headings = [] } = Astro.props;
```

## Build Outputs

- Blog builds to `apps/blog/dist/`
- Main builds to `apps/main/dist/`
- Static assets copied from `public/` directories
- Search index generated at build time for blog

## Deployment Considerations

- Both apps can be deployed independently
- Environment variables not used (all config in files)
- Static hosting compatible (Vercel, Netlify, etc.)
- No server-side rendering or API routes