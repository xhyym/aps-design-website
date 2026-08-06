---
title: 品牌标记
component: AppBrandMark
category: layout
source: packages/ui/src/components/layout/AppBrandMark.vue
---

# 品牌标记（AppBrandMark）

`AppBrandMark` 提供 APS Design Pro 的统一 SVG 品牌标记，可在产品导航、文档站和应用空状态中使用。

## 1. 用处

- 作为产品身份的最小视觉单元，适合与产品名并列或单独用于窄侧栏。
- 通过统一尺寸档位避免在业务代码中任意缩放 SVG。
- 在单色输出、对比度受限的场景使用 `mono`，保持标记结构清晰。

该组件是装饰性图标并带有 `aria-hidden`，不要用它替代能够说明功能的交互图标。

## 2. 代码演示

### 2.1 尺寸档位

```vue demo:layout-brand-mark-sizes title="不同尺寸"
<script setup lang="ts">
import { AppBrandMark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-marks">
    <AppBrandMark size="small" />
    <AppBrandMark />
    <AppBrandMark size="large" />
    <AppBrandMark size="hero" />
  </div>
</template>

<style scoped>
.demo-marks { display: flex; align-items: center; gap: 18px; }
</style>
```

### 2.2 单色标记

```vue demo:layout-brand-mark-mono title="单色模式"
<script setup lang="ts">
import { AppBrandMark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-marks">
    <div><AppBrandMark size="large" /><span>默认</span></div>
    <div><AppBrandMark size="large" tone="mono" /><span>单色</span></div>
  </div>
</template>

<style scoped>
.demo-marks { display: flex; align-items: center; gap: 32px; }
.demo-marks div { display: grid; justify-items: center; gap: 8px; color: var(--aps-muted); font-size: 12px; }
</style>
```

## 3. API 使用方式

```vue
<AppBrandMark size="hero" tone="default" />
```

组件使用设计令牌完成配色，随应用主题变量变化。不要通过 CSS 覆盖内部路径颜色，以免破坏品牌识别。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `size` | 品牌标记尺寸档位。 | `"small" \| "default" \| "large" \| "hero"` | `"default"` |
| `tone` | 标记的配色模式。 | `"default" \| "mono"` | `"default"` |

### 4.2 Slots

`AppBrandMark` 为纯 SVG 展示组件，不提供插槽或事件。
