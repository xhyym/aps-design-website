---
title: 表格工具栏
component: AppTableToolbar
category: data
source: packages/ui/src/components/data/AppTableToolbar.vue
---

# 表格工具栏（AppTableToolbar）

`AppTableToolbar` 为表格业务操作、辅助操作和批量操作提供固定的布局分区。

## 1. 用处

- 放在表格上方承载新增、导入、导出等业务按钮。
- 当表格出现选择行时，通过 `selectedCount` 自动切换为批量操作层。
- 组件不关心表格数据，只需由页面同步已选数量。

## 2. 代码演示

### 2.1 主操作与辅助操作

```vue demo:table-toolbar-basic title="课程工具栏"
<script setup lang="ts">
import { AppButton, AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppTableToolbar><AppButton size="small">新建课程</AppButton><template #actions><AppButton size="small" variant="secondary">导入</AppButton><AppButton size="small" variant="secondary">导出</AppButton></template></AppTableToolbar></template>
```

### 2.2 选择行后的批量操作

```vue demo:table-toolbar-bulk title="批量操作层"
<script setup lang="ts">
import { AppButton, AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppTableToolbar :selected-count="3"><AppButton size="small">添加成员</AppButton><template #bulk><AppButton size="small">批量分配</AppButton><AppButton size="small" variant="text">取消选择</AppButton></template></AppTableToolbar></template>
```


### 2.3 左右操作

```vue demo:table-toolbar-actions title="左右操作"
<script setup lang="ts">
import { AppButton, AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppTableToolbar :selected-count="0">
    <AppButton size="small">新增</AppButton>
    <AppButton size="small">导入</AppButton>
    <template #actions>
      <AppButton size="small" variant="text">导出</AppButton>
    </template>
  </AppTableToolbar>
</template>
```

### 2.4 选中计数

```vue demo:table-toolbar-count title="选中计数"
<script setup lang="ts">
import { AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppTableToolbar :selected-count="5">
    <template #bulk>
      <span>已选 5 项</span>
    </template>
  </AppTableToolbar>
</template>
```

### 2.5 自定义批量操作

```vue demo:table-toolbar-custom-bulk title="自定义批量操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";

const count = ref(2);
</script>

<template>
  <AppTableToolbar :selected-count="count">
    <AppButton size="small">新建任务</AppButton>
    <template #bulk>
      <AppButton size="small" @click="count = 0">清除</AppButton>
      <AppButton size="small">标记完成</AppButton>
      <AppButton size="small" tone="danger">移除</AppButton>
    </template>
  </AppTableToolbar>
</template>
```
## 3. API 使用方式

在 `AppDataTable` 采用 `v-model:selected-keys` 时，将已选数组长度传入工具栏。批量操作完成后应由业务页面清空选中状态。

```vue
<AppTableToolbar :selected-count="selectedKeys.length">
  <AppButton @click="openCreateDialog">新建用户</AppButton>
  <template #actions><AppExcelExport /></template>
  <template #bulk>
    <AppTableBatchEditor :selected-keys="selectedKeys" :fields="batchFields" />
    <AppButton variant="text" @click="selectedKeys = []">取消选择</AppButton>
  </template>
</AppTableToolbar>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `selectedCount` | 已选行数量，大于 `0` 时显示批量操作层。 | `number` | — |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 左侧主要业务操作。 |
| `actions` | 右侧辅助操作。 |
| `bulk` | 已选择数据时覆盖在工具栏上的批量操作。 |

### 4.3 Events

该组件不提供自定义事件，按钮行为由各插槽内容自行处理。
