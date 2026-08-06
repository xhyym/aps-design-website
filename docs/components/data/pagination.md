---
title: 分页器
component: AppPagination
category: data
source: packages/ui/src/components/data/AppPagination.vue
---

# 分页器（AppPagination）

`AppPagination` 管理服务端或本地列表的页码、页大小和快速跳页，并将分页状态完全交由页面持有。

## 1. 用处

- 为有明确总数的表格或列表提供统一分页控制。
- 同时使用 `v-model:page` 和 `v-model:page-size` 保存查询参数。
- 支持页大小选项与快速跳转，适合后台长列表。

## 2. 代码演示

### 2.1 受控页码与页大小

```vue demo:pagination-basic title="基础分页"
<script setup lang="ts">
import { ref } from "vue";
import { AppPagination } from "aps-design-pro";
import "aps-design-pro/style.css";

const page = ref(1);
const pageSize = ref(20);
</script>

<template><AppPagination v-model:page="page" v-model:page-size="pageSize" :total="246" /></template>
```

### 2.2 自定义每页数量

```vue demo:pagination-compact title="自定义选项"
<script setup lang="ts">
import { ref } from "vue";
import { AppPagination } from "aps-design-pro";
import "aps-design-pro/style.css";

const page = ref(4);
const pageSize = ref(10);
</script>

<template><AppPagination v-model:page="page" v-model:page-size="pageSize" :total="64" :page-size-options="[10, 25, 50]" :show-quick-jumper="false" /></template>
```

## 3. API 使用方式

在分页值变化后重新读取数据；页码超出总页数时应由业务请求结果重置为有效页。

```vue
<AppPagination v-model:page="query.page" v-model:page-size="query.pageSize" :total="response.total" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `page` / `pageSize` | 当前页码与每页数量，均支持双向绑定。 | `number` | 必填 |
| `total` | 总记录数。 | `number` | 必填 |
| `pageSizeOptions` | 可选择的每页数量。 | `number[]` | `[10, 20, 30, 50, 100]` |
| `showQuickJumper` | 是否显示快速跳页输入。 | `boolean` | `true` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:page` | `(page: number)` | 页码变化时触发。 |
| `update:pageSize` | `(pageSize: number)` | 每页数量变化时触发。 |
