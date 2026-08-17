---
title: 节日文本滚动
component: AppFestivalTextScroll
category: content
source: packages/ui/src/components/content/AppFestivalTextScroll.vue
---

# 节日文本滚动（AppFestivalTextScroll）

`AppFestivalTextScroll` 是面向节日或周年活动的轻量滚动文案封装，内部复用 `AppTextScroll`。

## 1. 用处

- 在节日专题、周年活动或发布庆祝页表达氛围文案。
- 它只提供语义化命名与速度配置，不额外引入背景、图片或业务动作。
- 通用系统公告应优先使用 `AppTextScroll`。

## 2. 代码演示

### 2.1 新春祝福

```vue demo:content-festival-text-scroll-basic title="新春祝福"
<script setup lang="ts">
import { AppFestivalTextScroll } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppFestivalTextScroll text="新春快乐，祝你新的一年万事顺意" /></template>
```

### 2.2 周年活动

```vue demo:content-festival-text-scroll-speed title="周年活动"
<script setup lang="ts">
import { AppFestivalTextScroll } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppFestivalTextScroll text="APS Design Pro 一周年，感谢每一位共建者" :speed="26" /></template>
```


### 2.3 自定义文案

```vue demo:content-festival-text-scroll-text title="自定义文案"
<script setup lang="ts">
import { AppFestivalTextScroll } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppFestivalTextScroll text="新春快乐 · 万事如意 · 恭喜发财" />
</template>
```

### 2.4 长文案

```vue demo:content-festival-text-scroll-long title="长文案"
<script setup lang="ts">
import { AppFestivalTextScroll } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppFestivalTextScroll text="国庆 7 天乐，全场商品低至 5 折起，会员叠加满减，优惠不容错过，快来选购吧！" :speed="30" />
</template>
```

### 2.5 快速滚动
```vue demo:content-festival-text-scroll-fast title="快速滚动"
<script setup lang="ts">
import { AppFestivalTextScroll } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppFestivalTextScroll text="周年庆典 · 好礼不断" :speed="8" />
</template>
```
## 3. API 使用方式

传入活动文案即可。若文案需要精细控制悬停行为，应使用 `AppTextScroll`，因为本组件只暴露 `text` 和 `speed`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 节日或活动文案。 | `string` | — |
| `speed` | 单轮滚动时长，单位秒。 | `number` | `18` |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

无自定义事件。
