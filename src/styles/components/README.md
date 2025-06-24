# 组件样式文件

这个目录包含了所有 Astro 组件的独立样式文件。

## 已创建的样式文件

- `blog-card.css` - 博客卡片组件样式
- `blog-filter.css` - 博客筛选器组件样式  
- `blog-pagination.css` - 博客分页组件样式
- `blog-search.css` - 博客搜索组件样式
- `contact.css` - 联系表单组件样式

## 样式文件模板

```css
@reference "tailwindcss";

.component-name {
  @apply /* Tailwind 工具类 */;
  /* 自定义 CSS 属性 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .component-name {
    @apply /* 移动端样式 */;
  }
}
```

## 在组件中使用

```astro
---
import '../../styles/components/your-component.css';
---

<div class="component-name">
  <!-- 组件内容 -->
</div>
``` 