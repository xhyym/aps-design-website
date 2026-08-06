---
title: 图片卡片
component: AppImageCard
category: content
source: packages/ui/src/components/content/AppImageCard.vue
---

# 图片卡片（AppImageCard）

`AppImageCard` 将一张图片、标题和简短说明组合为稳定比例的内容卡片。

## 1. 用处

- 展示文章、课程、空间或产品的可视化入口。
- 使用 `href` 时卡片会在新标签页打开目标链接。
- 图片只承担内容预览，重要信息仍应写在 `title` 与 `description` 中。

## 2. 代码演示

### 2.1 静态内容卡片

```vue demo:content-image-card-basic title="静态内容卡片"
<script setup lang="ts">
import { AppImageCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppImageCard title="上海研发中心" description="面向产品与工程团队的协作空间。" alt="上海研发中心的会议室" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80" />
</template>
```

### 2.2 作为外部资源入口

```vue demo:content-image-card-link title="链接卡片"
<script setup lang="ts">
import { AppImageCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppImageCard title="设计系统指南" description="在新窗口阅读布局与组件规范。" alt="设计稿与笔记本电脑" href="https://gitee.com/xhyym/aps-design-pro" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" />
</template>
```

## 3. API 使用方式

`title` 与 `src` 必填。`alt` 未传入时会回退为标题，因此当图片本身有独立含义时，应提供更准确的替代文本。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 卡片标题，也会作为图片替代文本的回退值。 | `string` | — |
| `src` | 图片地址。 | `string` | — |
| `alt` | 图片替代文本。 | `string` | `""` |
| `description` | 卡片说明。 | `string` | `""` |
| `href` | 外部跳转地址；传入后在新标签页打开。 | `string` | `""` |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

无自定义事件。
