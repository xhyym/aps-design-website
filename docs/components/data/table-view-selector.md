---
title: 表格视图选择器
component: AppTableViewSelector
category: data
source: packages/ui/src/components/data/AppTableViewSelector.vue
---

# 表格视图选择器（AppTableViewSelector）

`AppTableViewSelector` 用图标入口切换、创建、重命名和删除同一张表的命名视图。

## 1. 用处

- 适合为不同岗位保存同一张表的浏览方案，例如默认、财务核对和运营跟进。
- 默认视图受保护，不能重命名或删除；自定义视图由业务层保存。
- 该组件只管理视图目录，列偏好应配合 `AppTableSettingsPanel` 或 `useTablePreferences` 单独持久化。

## 2. 代码演示

### 2.1 切换已有视图

```vue demo:table-view-selector-basic title="视图切换"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableViewSelector, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeViewId = ref("default");
const views = ref<TableView[]>([
  { id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 },
  { id: "finance", name: "财务核对", kind: "custom", createdAt: 1, updatedAt: 1 },
]);
</script>

<template><AppTableViewSelector v-model="activeViewId" :views="views" /></template>
```

### 2.2 创建、重命名和删除视图

```vue demo:table-view-selector-manage title="视图管理"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableViewSelector, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeViewId = ref("default");
const views = ref<TableView[]>([{ id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 }]);

function createView(name: string): void {
  const timestamp = Date.now();
  const id = `view-${timestamp}`;
  views.value.push({ id, name, kind: "custom", createdAt: timestamp, updatedAt: timestamp });
  activeViewId.value = id;
}

function renameView(viewId: string, name: string): void {
  const target = views.value.find((view) => view.id === viewId);
  if (target) target.name = name;
}

function removeView(viewId: string): void {
  views.value = views.value.filter((view) => view.id !== viewId);
  if (activeViewId.value === viewId) activeViewId.value = "default";
}
</script>

<template><AppTableViewSelector v-model="activeViewId" :views="views" @create="createView" @rename="renameView" @remove="removeView" /></template>
```

## 3. API 使用方式

将命名视图和当前视图 ID 保存在业务页面。视图切换时加载对应的列偏好，新增、改名和删除事件则接入自己的视图仓库。

```vue
<AppTableViewSelector
  v-model="tableViewState.activeViewId"
  :views="tableViewState.views"
  :saving="isSavingView"
  :error="viewError"
  @create="createTableView"
  @rename="renameTableView"
  @remove="removeTableView"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中的视图 ID。 | `string` | 必填 |
| `views` | 可选视图目录，需包含一个默认视图。 | `TableView[]` | 必填 |
| `loading` | 是否禁用打开选择器。 | `boolean` | `false` |
| `saving` | 新建、改名、删除请求进行中。 | `boolean` | `false` |
| `error` | 业务层返回的保存错误。 | `string` | `""` |
| `maxNameLength` | 新建或重命名的最大长度。 | `number` | `24` |

### 4.2 Slots

该组件不提供插槽，触发图标与视图管理面板由组件统一处理。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(viewId: string)` | 选择其他视图时触发。 |
| `create` | `(name: string)` | 提交新视图名称。 |
| `rename` | `(viewId: string, name: string)` | 提交自定义视图的新名称。 |
| `remove` | `(viewId: string)` | 请求删除自定义视图。 |
