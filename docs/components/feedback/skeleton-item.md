---
title: 骨架项
component: AppSkeletonItem
category: feedback
source: packages/ui/src/components/feedback/AppSkeletonItem.vue
---

# 骨架项（AppSkeletonItem）

`AppSkeletonItem` 是构建非标准骨架屏的最小单元，可用于文本、圆形头像和图片占位。

## 1. 用处

- 在自定义 `AppSkeleton` 模板内搭建与真实布局相近的占位块。
- 以 `width`、`height` 控制占位尺寸。
- 通过 `variant` 表达文本、圆形或图片的内容轮廓。

不要将它用作真实内容的分隔线或装饰元素。

## 2. 代码演示

### 2.1 不同宽度的文本

```vue demo:skeleton-item-basic title="文本骨架"
<script setup lang="ts">
import { AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSkeletonItem variant="text" width="68%" />
  <AppSkeletonItem variant="text" width="42%" />
</template>
```

### 2.2 头像与图片轮廓

```vue demo:skeleton-item-avatar title="头像与图片"
<script setup lang="ts">
import { AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSkeletonItem variant="circle" width="44px" height="44px" />
  <AppSkeletonItem variant="image" width="120px" height="68px" :animated="false" />
</template>
```


### 2.3 图片占位

```vue demo:skeleton-item-image title="图片占位"
<script setup lang="ts">
import { AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSkeletonItem variant="image" width="120px" height="90px" />
</template>
```

### 2.4 尺寸控制

```vue demo:skeleton-item-sizes title="尺寸控制"
<script setup lang="ts">
import { AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppSkeletonItem variant="text" width="60%" />
    <AppSkeletonItem variant="text" width="40%" height="20px" />
    <AppSkeletonItem variant="circle" width="48px" height="48px" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
```

### 2.5 关闭动画

```vue demo:skeleton-item-animated-off title="关闭动画"
<script setup lang="ts">
import { AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppSkeletonItem variant="text" width="80%" :animated="false" />
    <AppSkeletonItem variant="text" width="60%" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
```
## 3. API 使用方式

通常把多个骨架项组合在 `AppSkeleton` 的 `template` 插槽中。

```vue
<AppSkeleton :loading="loading"><template #template><AppSkeletonItem variant="image" height="160px" /></template></AppSkeleton>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `variant` | 占位形状。 | `"text" \| "circle" \| "image"` | `"text"` |
| `width` / `height` | CSS 长度或数值尺寸。 | `SkeletonLength` | `undefined` |
| `animated` | 是否显示闪动动画。 | `boolean` | `true` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

该组件不提供自定义事件。
