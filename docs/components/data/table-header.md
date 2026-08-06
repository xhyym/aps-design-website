---
title: 表格头部
component: AppTableHeader
category: data
source: packages/ui/src/components/data/AppTableHeader.vue
---

# 表格头部（AppTableHeader）

`AppTableHeader` 将列表标题、筛选开关、刷新、密度、全屏和列显示入口组织为标准表格头部。

## 1. 用处

- 用在表格面板的顶端，将数据标题与表格级操作分离于业务工具栏。
- 搜索区域是否展开、表格尺寸与列可见性都可以由页面受控保存。
- 业务自己的筛选、导出等操作放到对应插槽，避免改动组件源码。

## 2. 代码演示

### 2.1 标题和可折叠搜索

```vue demo:table-header-basic title="带搜索的表格头部"
<script setup lang="ts">
import { ref } from "vue";
import { AppInput, AppTableHeader, type ControlSize } from "aps-design-pro";
import "aps-design-pro/style.css";

const searchVisible = ref(false);
const tableSize = ref<ControlSize>("default");
const keyword = ref("");
</script>

<template><AppTableHeader v-model:search-visible="searchVisible" v-model:table-size="tableSize" title="课程列表" description="共 36 门课程"><template #filters><AppInput v-if="searchVisible" v-model="keyword" placeholder="搜索课程" /></template></AppTableHeader></template>
```

### 2.2 列显示设置

```vue demo:table-header-columns title="列显示入口"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableHeader, type ColumnVisibilityOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const visibility = ref<Record<string, boolean>>({ name: true, author: true, updatedAt: true });
const columnOptions: ColumnVisibilityOption[] = [
  { key: "name", label: "课程名称" },
  { key: "author", label: "讲师" },
  { key: "updatedAt", label: "更新时间" },
];
</script>

<template><AppTableHeader v-model="visibility" title="内容库" :column-options="columnOptions" :show-search="false" :show-density="false" /></template>
```

## 3. API 使用方式

建议把 `AppTableHeader` 放在搜索面板与表格之间。`filters` 放可折叠的查询控件，`actions` 放导出等业务扩展。

```vue
<AppTableHeader
  v-model="columnVisibility"
  v-model:search-visible="showSearch"
  v-model:table-size="tableSize"
  title="用户管理"
  :column-options="columnOptions"
  @refresh="reload"
  @fullscreen="toggleFullscreen"
>
  <template #filters><UserSearchForm v-if="showSearch" /></template>
  <template #actions><AppExcelExport /></template>
</AppTableHeader>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 各列是否展示的受控映射。 | `Record<string, boolean>` | `{}` |
| `title` / `description` | 表格标题与补充说明。 | `string` | `""` |
| `loading` | 刷新按钮加载状态。 | `boolean` | `false` |
| `showSearch` / `searchVisible` | 搜索显示按钮及搜索区域状态。 | `boolean` | `true` / `false` |
| `fullscreen` | 预留的表格全屏状态。 | `boolean` | `false` |
| `tableSize` | 当前表格密度。 | `ControlSize` | `"default"` |
| `columnOptions` | 显示列设置可选项。 | `ColumnVisibilityOption[]` | `[]` |
| `showDensity` | 是否显示密度菜单。 | `boolean` | `true` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `filters` | 位于图标操作前的筛选区域。 |
| `actions` | 位于列显示按钮后的业务扩展操作。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `Record<string, boolean>` | 列显示状态更新。 |
| `update:searchVisible` | `boolean` | 搜索区域开关变化。 |
| `update:tableSize` | `ControlSize` | 用户选择表格密度。 |
| `refresh` / `fullscreen` | — | 点击刷新或全屏入口时触发。 |
