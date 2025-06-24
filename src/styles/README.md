# 样式文件组织结构

这个目录包含了项目中所有组件的样式文件，用于解决 Tailwind CSS v4 中的 `@apply` 错误问题。

## 文件结构

```
src/styles/
├── global.css                 # 全局样式和变量定义
├── components/                # 组件样式文件
│   ├── blog-card.css         # BlogCard 组件样式
│   ├── blog-filter.css       # BlogFilter 组件样式
│   ├── blog-pagination.css   # BlogPagination 组件样式
│   ├── blog-search.css       # BlogSearch 组件样式
│   └── contact.css           # Contact 组件样式
├── pages/                    # 页面样式文件
│   └── blog-archive.css      # 博客归档页面样式
└── README.md                 # 本说明文件
```

## 使用方法

### 1. 在 Astro 组件中导入样式文件

```astro
---
import '../../styles/components/your-component.css';
---

<div class="your-component-class">
  <!-- 组件内容 -->
</div>
```

### 2. 创建新的组件样式文件

```css
@reference "tailwindcss";

.your-component-class {
  @apply bg-blue-500 text-white p-4 rounded-lg;
}

/* 自定义CSS属性 */
.your-component-class:hover {
  transform: scale(1.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .your-component-class {
    @apply p-2 text-sm;
  }
}
```

## 重要说明

1. **@reference 指令**: 每个组件样式文件必须在开头添加 `@reference "tailwindcss";`
2. **类名规范**: 使用组件名作为类名前缀，避免冲突
3. **导入顺序**: 组件样式会在 global.css 中统一导入
4. **Tailwind v4 兼容性**: 这种方法解决了 v4 中样式块隔离的问题

## 常见问题

- **"Cannot apply unknown utility class" 错误**: 确保添加了 `@reference "tailwindcss";`
- **样式不生效**: 检查导入路径是否正确
- **冲突问题**: 使用特定的类名前缀避免样式冲突 