---
title: 表格操作栏
component: AppTableOperationBar
category: data
source: packages/ui/src/components/data/AppTableOperationBar.vue
---

# 表格操作栏（AppTableOperationBar）

`AppTableOperationBar` 按固定顺序承载列筛选、视图、设置、导出及打印、全屏、刷新等表格操作。

## 1. 用处

- 让每张表的右侧操作具有相同顺序和图标语言。
- 专用能力通过具名插槽放入；组件不绑定任何数据源或导出实现。
- 页面选择需要显示的内置按钮，并响应打印、刷新和更多操作事件。

## 2. 代码演示

### 2.1 视图和列设置组合

```vue demo:table-operation-bar-basic title="标准表格操作"
<script setup lang="ts">
import { AppColumnSettings, AppTableOperationBar, AppTableViewSelector, type ColumnVisibilityOption, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const views: TableView[] = [{ id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 }];
const columnOptions: ColumnVisibilityOption[] = [{ key: "name", label: "课程名称" }, { key: "status", label: "状态" }];
</script>

<template><AppTableOperationBar show-refresh show-fullscreen><template #view><AppTableViewSelector model-value="default" :views="views" /></template><template #settings><AppColumnSettings :model-value="{ name: true, status: true }" :options="columnOptions" /></template></AppTableOperationBar></template>
```

### 2.2 导出、打印和更多操作

```vue demo:table-operation-bar-extra title="扩展操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppExcelExport, AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const isFullscreen = ref(false);
</script>

<template><AppTableOperationBar v-model:fullscreen="isFullscreen" show-print show-fullscreen show-refresh show-more><template #export><AppExcelExport title="导出订单" /></template></AppTableOperationBar></template>
```


### 2.3 全屏

```vue demo:table-operation-bar-fullscreen title="全屏"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const full = ref(false);
</script>

<template>
  <AppTableOperationBar v-model:fullscreen="full" show-fullscreen />
</template>
```

### 2.4 打印

```vue demo:table-operation-bar-print title="打印"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const full = ref(false);
const onPrint = () => {
  window.print();
};
</script>

<template>
  <AppTableOperationBar v-model:fullscreen="full" show-print show-fullscreen @print="onPrint" />
</template>
```

### 2.5 刷新

```vue demo:table-operation-bar-refresh title="刷新"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const full = ref(false);
const refreshing = ref(false);
const onRefresh = async () => {
  refreshing.value = true;
  await new Promise((r) => setTimeout(r, 1000));
  refreshing.value = false;
};
</script>

<template>
  <AppTableOperationBar v-model:fullscreen="full" show-refresh :refresh-disabled="refreshing" @refresh="onRefresh" />
</template>
```

### 2.6 插槽扩展

```vue demo:table-operation-bar-slots title="插槽扩展"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTableOperationBar } from "aps-design-pro";
import "aps-design-pro/style.css";

const full = ref(false);
</script>

<template>
  <AppTableOperationBar v-model:fullscreen="full" show-refresh show-more>
    <template #before>
      <AppButton size="small">左侧操作</AppButton>
    </template>
    <template #after>
      <AppButton size="small">右侧操作</AppButton>
    </template>
  </AppTableOperationBar>
</template>
```
## 3. API 使用方式

操作栏通常放在工具栏右侧。插槽遵循筛选、视图、设置、导出、前置、后置的固定顺序，便于用户形成操作记忆。

```vue
<AppTableOperationBar
  v-model:fullscreen="fullscreen"
  show-print
  show-refresh
  @print="printTable"
  @refresh="reload"
>
  <template #filters><AppTableColumnFilters v-model="filters" :fields="fields" /></template>
  <template #export><AppExcelExport /></template>
</AppTableOperationBar>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `fullscreen` | 当前是否处于全屏状态。 | `boolean` | `false` |
| `showPrint` / `showFullscreen` / `showRefresh` / `showMore` | 是否展示对应内置入口。 | `boolean` | `false` |
| `printDisabled` / `refreshDisabled` / `moreDisabled` | 对应入口的禁用状态。 | `boolean` | `false` |
| `printLabel` / `refreshLabel` / `moreLabel` | 图标按钮提示与无障碍名称。 | `string` | 内置中文文案 |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `filters` / `view` / `settings` / `export` | 依次放列筛选、视图、设置和导出能力。 |
| `before` / `after` | 内置按钮前后追加的自定义操作。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:fullscreen` | `boolean` | 同步全屏状态。 |
| `print` / `refresh` / `more` | — | 用户点击相应操作时触发。 |
