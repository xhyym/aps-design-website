---
title: 文本滚动
component: AppTextScroll
category: content
source: packages/ui/src/components/content/AppTextScroll.vue
---

# 文本滚动（AppTextScroll）

`AppTextScroll` 让一条较长的单行文字持续横向滚动，适合展示不需要立即操作的公告。

## 1. 用处

- 在顶部公告条、直播提示或活动页展示短通知。
- 默认悬停暂停，便于桌面端用户阅读。
- 不应把必须立即理解的错误、风险或操作说明放进滚动文字。

## 2. 代码演示

### 2.1 默认公告

```vue demo:content-text-scroll-basic title="默认公告"
<script setup lang="ts">
import { AppTextScroll } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppTextScroll text="系统将在本周六 02:00 至 04:00 进行例行维护" /></template>
```

### 2.2 更快的活动文案

```vue demo:content-text-scroll-speed title="调整滚动速度"
<script setup lang="ts">
import { AppTextScroll } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppTextScroll text="新品课程现已开放报名，完成学习可获得结课证书" :speed="9" :pause-on-hover="false" /></template>
```

## 3. API 使用方式

`speed` 是完成一轮动画的秒数，数值越小滚动越快。关闭 `pauseOnHover` 后，鼠标悬停不会中断滚动。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 要重复滚动的单行文本。 | `string` | — |
| `speed` | 单轮滚动时长，单位秒。 | `number` | `16` |
| `pauseOnHover` | 鼠标悬停时是否暂停。 | `boolean` | `true` |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

无自定义事件。
