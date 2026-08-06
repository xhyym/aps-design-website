---
title: 表格设置面板
component: AppTableSettingsPanel
category: data
source: packages/ui/src/components/data/AppTableSettingsPanel.vue
---

# 表格设置面板（AppTableSettingsPanel）

`AppTableSettingsPanel` 用抽屉维护表格密度、斑马纹、列可见性、列顺序、宽度和冻结位置。

## 1. 用处

- 用于 SaaS 管理后台中每位成员不同的表格浏览偏好。
- 偏好值完全受控，适合配合 `useTablePreferences` 保存到本地或服务端。
- 组件只编辑展示偏好，不处理租户权限、业务筛选和表格数据。

## 2. 代码演示

### 2.1 基础列偏好

```vue demo:table-settings-panel-basic title="课程表格设置"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableSettingsPanel, type TablePreference } from "aps-design-pro";
import "aps-design-pro/style.css";

const defaultValue: TablePreference = {
  version: 1,
  columns: [{ key: "name", visible: true, order: 0, width: 240, fixed: null }, { key: "status", visible: true, order: 1, width: 120, fixed: null }],
  striped: false,
  showColumnDividers: false,
  density: "comfortable",
  updatedAt: 0,
};
const preference = ref<TablePreference>({ ...defaultValue, columns: defaultValue.columns.map((column) => ({ ...column })) });
const columns = [{ key: "name", label: "课程名称", defaultWidth: 240 }, { key: "status", label: "状态", defaultWidth: 120 }];
</script>

<template><AppTableSettingsPanel v-model="preference" :default-value="defaultValue" :columns="columns" /></template>
```

### 2.2 限制列宽与最少显示列

```vue demo:table-settings-panel-limits title="订单表格边界"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableSettingsPanel, type TablePreference } from "aps-design-pro";
import "aps-design-pro/style.css";

const defaultValue: TablePreference = {
  version: 1,
  columns: [{ key: "id", visible: true, order: 0, width: 120, fixed: "left" }, { key: "amount", visible: true, order: 1, width: 160, fixed: null }],
  striped: true,
  showColumnDividers: true,
  density: "compact",
  updatedAt: 0,
};
const preference = ref<TablePreference>({ ...defaultValue, columns: defaultValue.columns.map((column) => ({ ...column })) });
const columns = [{ key: "id", label: "订单号", minWidth: 120, maxWidth: 220 }, { key: "amount", label: "金额", minWidth: 120, maxWidth: 240 }];
</script>

<template><AppTableSettingsPanel v-model="preference" :default-value="defaultValue" :columns="columns" :min-visible="1" :min-column-width="110" :max-column-width="300" /></template>
```

## 3. API 使用方式

将 `TablePreference` 和默认值传入组件；在 `v-model` 变化时交给仓库或 `useTablePreferences` 做持久化，并用同一偏好派生 `AppDataTable` 的列配置。

```vue
<AppTableSettingsPanel
  v-model="tablePreference"
  :default-value="defaultPreference"
  :columns="tableColumns"
/>
<AppDataTable
  :columns="visibleColumns"
  :striped="tablePreference.striped"
  :show-column-dividers="tablePreference.showColumnDividers"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前表格偏好，使用双向绑定。 | `TablePreference` | 必填 |
| `defaultValue` | 恢复默认时写回的偏好。 | `TablePreference` | 必填 |
| `columns` | 当前表格列的元数据，供显示名称和宽度边界使用。 | `SettingColumn[]` | 必填 |
| `minVisible` | 至少保留的显示列数量。 | `number` | `1` |
| `minColumnWidth` / `maxColumnWidth` | 未在列元数据声明时的全局列宽边界。 | `number` | `96` / `960` |
| `saving` / `saveError` | 外部持久化中的状态和失败文案。 | `boolean` / `string` | `false` / `""` |

### 4.2 Slots

该组件不提供插槽；抽屉的显示、恢复默认和完成操作由组件统一管理。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `TablePreference` | 设置任一项后返回带新 `updatedAt` 的完整偏好。 |
