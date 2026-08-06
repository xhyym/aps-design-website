---
title: 导出任务面板
component: AppExportTaskPanel
category: data
source: packages/ui/src/components/data/AppExportTaskPanel.vue
---

# 导出任务面板（AppExportTaskPanel）

`AppExportTaskPanel` 将创建导出、任务历史、失败重试与下载入口统一为紧凑操作区。

## 1. 用处

- 适用于异步生成报表、订单明细等耗时导出。
- 调用方负责轮询或订阅任务状态，并回写 `tasks`。

## 2. 代码演示

### 2.1 创建并查看任务

```vue demo:data-export-task-panel-basic title="创建任务"
<script setup lang="ts">
import { ref } from "vue";
import { AppExportTaskPanel, type ExportTask } from "aps-design-pro";
import "aps-design-pro/style.css";

const tasks = ref<ExportTask[]>([{ id: "1", title: "订单明细.xlsx", status: "succeeded", createdAt: "10:20", completedAt: "10:21", downloadable: true }]);
function create(): void { tasks.value.unshift({ id: `${Date.now()}`, title: "新的导出任务.xlsx", status: "processing", createdAt: "刚刚", progress: 40 }); }
</script>

<template><AppExportTaskPanel :tasks="tasks" @create="create" @download="(task) => console.info('下载任务：', task.id)" /></template>
```

### 2.2 失败后重试

```vue demo:data-export-task-panel-retry title="失败重试"
<script setup lang="ts">
import { ref } from "vue";
import { AppExportTaskPanel, type ExportTask } from "aps-design-pro";
import "aps-design-pro/style.css";

const tasks = ref<ExportTask[]>([{ id: "2", title: "客户清单.xlsx", status: "failed", createdAt: "09:14", errorMessage: "文件服务暂不可用" }]);
function retry(task: ExportTask): void { tasks.value = tasks.value.map((item) => item.id === task.id ? { ...item, status: "processing", errorMessage: "", progress: 10 } : item); }
</script>

<template><AppExportTaskPanel :tasks="tasks" @retry="retry" /></template>
```

## 3. API 使用方式

每个 `ExportTask` 需有稳定 `id`、标题、创建时间和状态。`download` 事件只表示用户请求下载，业务层必须使用有权限的地址取得文件。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `tasks` | 导出任务列表。 | `ExportTask[]` | — |
| `creating` / `disabled` | 创建中和禁用状态。 | `boolean` | `false` |
| `createText` / `label` / `emptyText` | 操作与面板文案。 | `string` | 内置文案 |

### 4.2 Slots

无插槽。

### 4.3 Events

支持 `create`、`download(task)`、`retry(task)`、`remove(task)`。
