# MatrixRain 代码雨组件

一个独立的、可配置的黑客帝国风格代码雨背景效果组件，支持全屏和容器内嵌入两种模式。

## 特性

- 🌧️ 经典的黑客帝国代码雨效果
- 📦 **支持容器内嵌入** - 可以嵌入到任何尺寸的容器中
- 🖥️ **全屏模式** - 传统的全屏背景效果
- 🎨 完全可自定义的外观和行为
- 📱 响应式设计，支持移动端
- ⚡ 高性能Canvas渲染，自动适应容器大小
- 🔧 零依赖，即插即用
- 🎯 支持多实例，避免ID冲突

## 基础使用

### 容器内嵌入模式（推荐）

```astro
---
import MatrixRain from './components/MatrixRain.astro';
---

<!-- 在指定容器内使用 -->
<div style="width: 400px; height: 300px; position: relative;">
  <MatrixRain width="100%" height="100%" />
  <div style="position: relative; z-index: 10; padding: 20px;">
    <h2>你的内容</h2>
    <p>代码雨作为背景效果</p>
  </div>
</div>
```

### 全屏背景模式

```astro
---
import MatrixRain from './components/MatrixRain.astro';
---

<!-- 全屏背景效果 -->
<MatrixRain fullscreen={true} />

<!-- 你的页面内容 -->
<main>
  <h1>欢迎来到赛博世界</h1>
</main>
```

## 配置选项

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `opacity` | number | 0.6 | 代码雨透明度 (0.1-1.0) |
| `color` | string | '#39ff14' | 代码雨颜色 (CSS颜色值) |
| `fontSize` | number | 14 | 字体大小 (像素) |
| `speed` | number | 50 | 动画速度 (毫秒间隔) |
| `density` | number | 0.975 | 雨滴密度 (0.9-0.99，越大越稀疏) |
| `glowEffect` | boolean | true | 是否启用发光效果 |
| `characters` | string | 'ABC...123...' | 自定义字符集 |
| `zIndex` | number | -1 | CSS层级 |
| **`fullscreen`** | **boolean** | **false** | **是否全屏模式** |
| **`width`** | **string** | **'100%'** | **容器宽度 (CSS值)** |
| **`height`** | **string** | **'100%'** | **容器高度 (CSS值)** |
| **`className`** | **string** | **''** | **自定义CSS类名** |

## 使用示例

### 基础配置

```astro
<MatrixRain 
  opacity={0.8}
  color="#00f5ff"
/>
```

### 高级配置

```astro
<MatrixRain 
  opacity={0.7}
  color="#fcee09"
  fontSize={16}
  speed={30}
  density={0.98}
  glowEffect={true}
  characters="01アイウエオカキクケコ"
  zIndex={-10}
/>
```

### 多种颜色主题

```astro
<!-- 经典绿色 -->
<MatrixRain color="#39ff14" />

<!-- 赛博蓝 -->
<MatrixRain color="#00f5ff" />

<!-- 霓虹黄 -->
<MatrixRain color="#fcee09" />

<!-- 粉红朋克 -->
<MatrixRain color="#ff0080" />
```

### 自定义字符集

```astro
<!-- 日文字符 -->
<MatrixRain characters="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" />

<!-- 二进制 -->
<MatrixRain characters="01" />

<!-- 中文字符 -->
<MatrixRain characters="赛博朋克黑客帝国代码雨数字世界虚拟现实人工智能" />
```

## 性能优化

- 组件自动处理Canvas大小调整
- 在移动设备上自动降低透明度
- 支持多实例而不会产生ID冲突
- 页面卸载时自动清理动画

## 浏览器兼容性

- Chrome/Edge: ✅ 完全支持
- Firefox: ✅ 完全支持  
- Safari: ✅ 完全支持
- 移动浏览器: ✅ 支持（自动优化）

## 注意事项

1. 组件使用固定定位，会覆盖整个视口
2. 默认 `pointer-events: none`，不会阻止用户交互
3. 建议在深色背景上使用以获得最佳效果
4. 可以与其他背景效果组合使用

## 与其他组件组合

```astro
---
import MatrixRain from './components/MatrixRain.astro';
import CyberBackground from './components/CyberBackground.astro';
---

<!-- 组合使用多种背景效果 -->
<MatrixRain opacity={0.4} zIndex={-2} />
<CyberBackground matrixOpacity={0} zIndex={-1} />

<main>
  <!-- 你的内容 -->
</main>
```

## 故障排除

**Q: 代码雨没有显示？**
A: 检查是否有其他元素遮挡，确保zIndex设置正确。

**Q: 性能问题？**
A: 尝试降低密度值或增加速度间隔。

**Q: 移动端效果不佳？**
A: 组件会自动在移动端降低透明度，你也可以手动调整。
