---
title: 图片
component: AppImage
category: content
source: packages/ui/src/components/content/AppImage.vue
---

# 图片（AppImage）

`AppImage` 提供固定比例、加载状态、错误回退和可选大图预览的图片展示能力。

## 1. 用处

- 展示封面、现场照片或商品图，并保持布局在图片加载前稳定。
- `preview` 适合需要查看细节的单张图片；多图浏览使用 `AppImageViewer`。
- `fallbackSrc` 只能是可访问的备用资源，业务仍应监控 `error` 事件。

## 2. 代码演示

### 2.1 带说明的内容图片

```vue demo:content-image-basic title="内容图片"
<script setup lang="ts">
import { AppImage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppImage src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="安静的协作办公空间" aspect-ratio="16 / 7">
    <template #caption>上海研发中心 · 可预约使用</template>
  </AppImage>
</template>
```

### 2.2 打开单图预览

```vue demo:content-image-preview title="单图预览"
<script setup lang="ts">
import { AppImage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppImage src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" alt="笔记本电脑和代码编辑器" preview preview-title="开发环境照片" /></template>
```

## 3. API 使用方式

默认 `fit="cover"` 且按 `16 / 9` 保留位置。启用 `preview` 后，点击图片会打开内置对话框，可按 Esc 关闭；加载和失败事件仍在原图元素上触发。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | 主图片地址。 | `string` | — |
| `alt` | 图片替代文本。 | `string` | `"图片"` |
| `fallbackSrc` | 主地址失败时的备用图片地址。 | `string` | `""` |
| `fit` | 图片适配策略。 | `"cover" \| "contain" \| "fill" \| "none" \| "scale-down"` | `"cover"` |
| `radius` | 圆角级别。 | `"none" \| "small" \| "default" \| "round"` | `"default"` |
| `aspectRatio` | 容器宽高比 CSS 值。 | `string` | `"16 / 9"` |
| `lazy` | 是否使用原生懒加载。 | `boolean` | `true` |
| `preview` | 是否可点击预览大图。 | `boolean` | `false` |
| `previewTitle` | 预览对话框的无障碍标题。 | `string` | `"图片预览"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `caption` | 覆盖在图片底部的说明文字。 |
| `error` | 图片彻底加载失败时的提示内容。 |

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `load` | 图片加载完成。 | `(event: Event)` |
| `error` | 主图和备用图均失败时触发。 | `(event: Event)` |
| `preview` | 打开预览前触发。 | `()` |
