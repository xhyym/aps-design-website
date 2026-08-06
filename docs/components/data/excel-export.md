---
title: 表格导出
component: AppExcelExport
category: data
source: packages/ui/src/components/data/AppExcelExport.vue
---

# 表格导出（AppExcelExport）

`AppExcelExport` 提供统一的 Excel 导出触发按钮，不绑定任何特定数据来源。

## 1. 用处

- 在报表或表格操作区发起一次导出任务。
- 点击后的文件生成、鉴权和下载由 `export` 事件的业务处理器完成。

## 2. 代码演示

### 2.1 指定文件名

```vue demo:excel-export-basic title="指定文件名"
<script setup lang="ts">
import { AppExcelExport } from "aps-design-pro";
import "aps-design-pro/style.css";

function exportOrders(): void { console.info("开始导出订单数据"); }
</script>

<template><AppExcelExport filename="订单数据.xlsx" @export="exportOrders" /></template>
```

### 2.2 创建任务时的加载状态

```vue demo:excel-export-loading title="加载状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppExcelExport } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);
function createExport(): void { loading.value = true; window.setTimeout(() => { loading.value = false; }, 800); }
</script>

<template><AppExcelExport :loading="loading" @export="createExport" /></template>
```

## 3. API 使用方式

在 `export` 中先创建服务端导出任务，复杂任务配合 `AppExportTaskPanel` 展示进度与下载记录。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `filename` | 供导出按钮和下载逻辑使用的建议名称。 | `string` | `"数据导出.xlsx"` |
| `disabled` / `loading` | 禁用和创建中状态。 | `boolean` | `false` |

### 4.2 Slots

无插槽。

### 4.3 Events

| 事件 | 说明 |
| --- | --- |
| `export` | 用户点击导出按钮。 |
