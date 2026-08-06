---
title: 显示列设置
component: AppColumnSettings
category: data
source: packages/ui/src/components/data/AppColumnSettings.vue
---

# 显示列设置（AppColumnSettings）

`AppColumnSettings` 用轻量弹层控制基础表格列的显示与隐藏，并可选择持久化到浏览器。

## 1. 用处

- 适用于仅需要控制显示列、无需排序和列宽设置的简单列表。
- `modelValue` 使用“字段键 → 是否显示”的映射，可直接过滤业务的列定义。
- 传入 `storageKey` 后会把可见性保存为本地界面偏好，不会混入业务数据。

## 2. 代码演示

### 2.1 受控显示列

```vue demo:column-settings-basic title="基础显示列"
<script setup lang="ts">
import { ref } from "vue";
import { AppColumnSettings, type ColumnVisibilityOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const visibility = ref<Record<string, boolean>>({ name: true, author: true, updatedAt: false });
const options: ColumnVisibilityOption[] = [{ key: "name", label: "课程名称" }, { key: "author", label: "讲师" }, { key: "updatedAt", label: "更新时间" }];
</script>

<template><AppColumnSettings v-model="visibility" :options="options" /></template>
```

### 2.2 本地保存并限制最少显示列

```vue demo:column-settings-storage title="持久化显示偏好"
<script setup lang="ts">
import { ref } from "vue";
import { AppColumnSettings, type ColumnVisibilityOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const visibility = ref<Record<string, boolean>>({ id: true, customer: true, amount: true });
const options: ColumnVisibilityOption[] = [{ key: "id", label: "订单号" }, { key: "customer", label: "客户" }, { key: "amount", label: "金额" }];
</script>

<template><AppColumnSettings v-model="visibility" :options="options" storage-key="aps-docs-order-columns" :min-visible="2" /></template>
```

## 3. API 使用方式

使用 `visibility` 对列定义做过滤即可。若同一页面存在多个表格，必须使用不同的 `storageKey`，避免偏好冲突。

```vue
<AppColumnSettings v-model="columnVisibility" :options="columnOptions" storage-key="user-list-columns" />
<AppDataTable :columns="columns.filter((column) => columnVisibility[column.key])" :rows="rows" row-key="id" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 列显示状态映射，使用双向绑定。 | `Record<string, boolean>` | 必填 |
| `options` | 可选择的列定义。 | `ColumnVisibilityOption[]` | 必填 |
| `storageKey` | 本地存储键；不传时只在当前页面内受控。 | `string` | — |
| `minVisible` | 允许隐藏的下限，防止用户隐藏全部列。 | `number` | `1` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `Record<string, boolean>` | 用户切换列或恢复默认时触发。 |
