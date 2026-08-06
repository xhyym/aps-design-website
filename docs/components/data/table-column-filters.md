---
title: 表格列筛选
component: AppTableColumnFilters
category: data
source: packages/ui/src/components/data/AppTableColumnFilters.vue
---

# 表格列筛选（AppTableColumnFilters）

`AppTableColumnFilters` 将多个枚举字段收纳为带搜索和计数提示的表格筛选面板。

## 1. 用处

- 用于状态、区域、分类等多选枚举条件，不与页面顶部的关键字搜索混在一起。
- `v-model` 始终保存稳定选项值数组，可直接转换为接口查询参数。
- 组件只维护面板内搜索关键字；实际列表过滤和请求由页面处理。

## 2. 代码演示

### 2.1 多字段筛选与已选计数

```vue demo:table-column-filters-basic title="课程列筛选"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableColumnFilters, type TableColumnFilter, type TableColumnFilterValues } from "aps-design-pro";
import "aps-design-pro/style.css";

const filters = ref<TableColumnFilterValues>({ status: ["published"] });
const fields: TableColumnFilter[] = [
  { key: "status", label: "课程状态", options: [{ label: "已发布", value: "published" }, { label: "审核中", value: "review" }, { label: "已下架", value: "offline" }] },
  { key: "level", label: "课程难度", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }] },
];
</script>

<template><AppTableColumnFilters v-model="filters" :fields="fields" /></template>
```

### 2.2 自定义面板文案

```vue demo:table-column-filters-empty title="订单区域筛选"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableColumnFilters, type TableColumnFilter, type TableColumnFilterValues } from "aps-design-pro";
import "aps-design-pro/style.css";

const filters = ref<TableColumnFilterValues>({});
const fields: TableColumnFilter[] = [
  { key: "region", label: "服务区域", options: [{ label: "华东", value: "east" }, { label: "华南", value: "south" }] },
];
</script>

<template><AppTableColumnFilters v-model="filters" :fields="fields" title="订单筛选" search-placeholder="搜索区域" /></template>
```

## 3. API 使用方式

监听 `change` 后重载表格，`reset` 可同时清空业务侧的附加筛选条件或恢复默认页码。

```vue
<AppTableColumnFilters
  v-model="query.columnFilters"
  :fields="filterFields"
  @change="() => { query.page = 1; reload() }"
  @reset="reload"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 已选择的筛选值，键为字段键、值为选项值数组。 | `TableColumnFilterValues` | 必填 |
| `fields` | 可筛选字段及选项定义。 | `TableColumnFilter[]` | 必填 |
| `title` | 面板、按钮提示使用的名称。 | `string` | `"列筛选"` |
| `searchPlaceholder` | 面板内选项搜索框提示。 | `string` | `"搜索筛选项"` |

### 4.2 Slots

该组件不提供插槽，选项与字段均通过 `fields` 描述。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `TableColumnFilterValues` | 筛选值更新。 |
| `change` | `TableColumnFilterValues` | 每次选择变化时触发。 |
| `reset` | — | 用户点击面板重置时触发。 |
