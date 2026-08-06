---
title: 折叠面板
component: AppCollapse
category: data
source: packages/ui/src/components/data/AppCollapse.vue
---

# 折叠面板（AppCollapse）

`AppCollapse` 用于按需展开说明、规则和课程内容，支持多开与手风琴两种模式。

## 1. 用处

- 收纳不需要一直展开的帮助内容、商品规则或章节说明。
- 非互斥内容使用数组 `v-model` 同时展开多个面板。
- 互斥内容使用 `accordion` 和单个字符串值。

## 2. 代码演示

### 2.1 同时展开多个面板

```vue demo:collapse-basic title="多面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKeys = ref(["intro"]);
const items = [{ key: "intro", title: "课程介绍", content: "面向 Vue 3 项目的工程化实战课程。" }, { key: "outline", title: "课程大纲", content: "包含构建、测试与发布章节。" }];
</script>

<template><AppCollapse v-model="activeKeys" :items="items" /></template>
```

### 2.2 手风琴模式

```vue demo:collapse-accordion title="手风琴"
<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("shipping");
const items = [{ key: "shipping", title: "发货规则", content: "资料包将在付款后自动发放。" }, { key: "refund", title: "退款规则", content: "购买前请确认课程适用范围。" }];
</script>

<template><AppCollapse v-model="activeKey" accordion :items="items" /></template>
```

## 3. API 使用方式

每项必须有稳定的 `key`。需要富内容时，使用名为 `item-${key}` 的插槽。

```vue
<AppCollapse v-model="active" :items="items"><template #item-intro>课程详情内容</template></AppCollapse>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 展开项；普通模式为数组，手风琴模式为单个 key。 | `string[] \| string` | `[]` |
| `items` | 面板项，包含 `key`、`title`、可选 `description`、`content` 与 `disabled`。 | `CollapseItem[]` | 必填 |
| `accordion` / `bordered` | 是否互斥展开、是否显示外边框。 | `boolean` | `false / true` |
| `ariaLabel` | 区域辅助名称。 | `string` | `"折叠面板"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `title` | 自定义标题，参数为 `{ item }`。 |
| `item-${key}` | 自定义对应面板内容，参数为 `{ item }`。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string[] \| string)` | 展开项变化时触发。 |
