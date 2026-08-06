---
title: 加载状态
component: AppLoadingState
category: feedback
source: packages/ui/src/components/feedback/AppLoadingState.vue
---

# 加载状态（AppLoadingState）

`AppLoadingState` 为列表或详情区域提供带标题和骨架行的固定加载占位。

## 1. 用处

- 列表或卡片区首次加载时保留内容结构，减少跳动。
- 用简短标题和描述告诉用户当前在获取什么数据。
- 通过 `rows` 让占位高度接近真实列表内容。

需要自定义卡片结构时，使用 `AppSkeleton` 与 `AppSkeletonItem` 组合。

## 2. 代码演示

### 2.1 列表加载占位

```vue demo:loading-state-basic title="列表加载"
<script setup lang="ts">
import { AppLoadingState } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppLoadingState title="正在加载课程列表" description="正在同步你的筛选条件。" :rows="4" />
</template>
```

### 2.2 紧凑数据占位

```vue demo:loading-state-compact title="紧凑占位"
<script setup lang="ts">
import { AppLoadingState } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppLoadingState title="正在获取统计数据" :rows="2" />
</template>
```

## 3. API 使用方式

将它作为加载分支，不要与真实数据同时展示。

```vue
<AppLoadingState v-if="loading" title="正在加载订单" :rows="5" />
<OrderList v-else :items="orders" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 加载标题。 | `string` | `"正在加载"` |
| `description` | 加载说明。 | `string` | `"请稍候。"` |
| `rows` | 骨架行数。 | `number` | `3` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

该组件不提供自定义事件。
