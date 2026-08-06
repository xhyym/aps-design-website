---
title: 骨架屏
component: AppSkeleton
category: feedback
source: packages/ui/src/components/feedback/AppSkeleton.vue
---

# 骨架屏（AppSkeleton）

`AppSkeleton` 在内容加载期间保留主要版式，数据准备好后自动渲染默认插槽中的真实内容。

## 1. 用处

- 详情、列表卡片等内容结构已知但数据尚未返回的场景。
- 使用内置标题、头像和行数快速构造常见文本骨架。
- 复杂布局可通过 `template` 插槽完全自定义占位结构。

骨架的尺寸应接近真实内容，避免加载完成后页面大幅跳动。

## 2. 代码演示

### 2.1 内置文本骨架

```vue demo:skeleton-basic title="内置骨架"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSkeleton } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(true);
</script>

<template>
  <AppButton variant="text" size="small" @click="loading = !loading">切换加载状态</AppButton>
  <AppSkeleton :loading="loading" avatar title :rows="3">
    <strong>Vue 工程化实战</strong>
    <p>从项目规范到部署交付，建立可复用的开发流程。</p>
  </AppSkeleton>
</template>
```

### 2.2 自定义卡片骨架

```vue demo:skeleton-template title="自定义骨架"
<script setup lang="ts">
import { AppSkeleton, AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppSkeleton :loading="true">
    <template #template>
      <AppSkeletonItem variant="image" width="100%" height="96px" />
      <AppSkeletonItem variant="text" width="55%" />
    </template>
    <p>课程卡片内容</p>
  </AppSkeleton>
</template>
```

## 3. API 使用方式

将请求状态传给 `loading`，真实内容放入默认插槽。加载结束后无需手动切换结构。

```vue
<AppSkeleton :loading="isFetching" avatar :rows="4">
  <CourseProfile :course="course" />
</AppSkeleton>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 是否显示骨架。 | `boolean` | `true` |
| `rows` | 文本骨架行数。 | `number` | `3` |
| `avatar` / `title` | 是否显示头像和标题骨架。 | `boolean` | `false / true` |
| `animated` | 是否显示闪动动画。 | `boolean` | `true` |
| `ariaLabel` | 骨架区域辅助名称。 | `string` | `"内容加载中"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 加载完成后显示的真实内容。 |
| `template` | 替换内置骨架的自定义占位结构。 |

### 4.3 Events

该组件不提供自定义事件。
