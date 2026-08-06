---
title: 时间线
component: AppTimeline
category: content
source: packages/ui/src/components/content/AppTimeline.vue
---

# 时间线（AppTimeline）

`AppTimeline` 将已发生或进行中的状态记录按顺序展示，并支持左右交替布局和自定义节点内容。

## 1. 用处

- 展示订单、工单、项目交付、审批等可追溯的阶段记录。
- 数据排序由调用方决定；`reverse` 只反转当前展示，不修改传入数组。
- `currentKey` 用于突出当前进行项，而不是代替真实状态字段。

## 2. 代码演示

### 2.1 当前进度与待续状态

```vue demo:content-timeline-basic title="当前进度"
<script setup lang="ts">
import { AppTimeline, type TimelineItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: TimelineItem[] = [
  { key: "created", title: "订单已创建", timestamp: "09:20", state: "success" },
  { key: "review", title: "财务审核中", description: "预计 30 分钟内完成。", timestamp: "09:32", state: "processing" },
  { key: "delivery", title: "等待发货", timestamp: "—" },
];
</script>

<template><AppTimeline :items="items" current-key="review" pending /></template>
```

### 2.2 交替项目历程

```vue demo:content-timeline-alternate title="交替时间线"
<script setup lang="ts">
import { AppTimeline, type TimelineItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: TimelineItem[] = [
  { key: "1", title: "需求评审", timestamp: "06-02", state: "success" },
  { key: "2", title: "设计验收", timestamp: "06-08", state: "success" },
  { key: "3", title: "灰度发布", timestamp: "06-14", state: "processing" },
];
</script>

<template><AppTimeline :items="items" mode="alternate" timestamp-placement="top" /></template>
```

## 3. API 使用方式

每一项必须提供稳定 `key` 和 `title`。`state` 会决定默认节点颜色和图标；也可以用 `tone` 或 `marker` 插槽覆盖视觉表现，不必在业务数据中存储展示色。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 时间线记录。 | `TimelineItem[]` | — |
| `mode` | 常规左侧或左右交替布局。 | `"left" \| "alternate"` | `"left"` |
| `reverse` | 是否反向展示传入记录。 | `boolean` | `false` |
| `pending` | 是否在末尾显示等待节点。 | `boolean` | `false` |
| `pendingText` | 等待节点文字。 | `string` | `"等待后续动态"` |
| `timestampPlacement` | 左侧模式下的时间位置。 | `"top" \| "bottom"` | `"bottom"` |
| `currentKey` | 当前进行项的 key。 | `string` | `""` |
| `emptyText` | 空数组提示。 | `string` | `"暂无动态记录"` |
| `ariaLabel` | 时间线区域标签。 | `string` | `"时间线"` |

`TimelineItem`：`{ key: string; title: string; description?: string; timestamp?: string; tone?: TagTone; state?: "default" | "processing" | "success" | "warning" | "error"; icon?: IconName }`。

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `marker` | 自定义节点标记，作用域参数为 `item`、`index`。 |
| `item` | 自定义内容区，作用域参数为 `item`、`index`。 |
| `empty` | 空数据时的提示内容。 |

### 4.3 Events

无自定义事件。
