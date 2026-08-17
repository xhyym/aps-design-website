---
title: 表格批量编辑
component: AppTableBatchEditor
category: data
source: packages/ui/src/components/data/AppTableBatchEditor.vue
---

# 表格批量编辑（AppTableBatchEditor）

`AppTableBatchEditor` 依据选中行和字段配置，提供安全的批量字段修改入口。

## 1. 用处

- 用于批量调整课程状态、成员角色、库存或配额等同字段数据。
- 只有存在已选行且可编辑字段时才允许打开，避免空批量操作。
- 默认仅抛出 `submit`；传入 `request` 后会等待请求成功再关闭面板。

## 2. 代码演示

### 2.1 根据选择行批量修改

```vue demo:table-batch-editor-basic title="批量修改课程"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField } from "aps-design-pro";
import "aps-design-pro/style.css";

interface CourseRow {
  id: number;
  status: string;
  quota: number;
}

const selectedKeys = ref<Array<string | number>>([1, 2, 3]);
const fields: DataTableBatchEditField<CourseRow>[] = [
  { key: "status", label: "发布状态", editor: { type: "select", options: [{ label: "已发布", value: "published" }, { label: "已下架", value: "offline" }] } },
  { key: "quota", label: "学习配额", editor: { type: "number", min: 0, step: 10 } },
];
</script>

<template><AppTableBatchEditor :selected-keys="selectedKeys" :fields="fields" /></template>
```

### 2.2 未选择数据时禁用

```vue demo:table-batch-editor-disabled title="空选择保护"
<script setup lang="ts">
import { AppTableBatchEditor, type DataTableBatchEditField } from "aps-design-pro";
import "aps-design-pro/style.css";

interface MemberRow {
  id: number;
  role: string;
}

const fields: DataTableBatchEditField<MemberRow>[] = [
  { key: "role", label: "角色", editor: { type: "select", options: [{ label: "运营", value: "operator" }, { label: "讲师", value: "teacher" }] } },
];
</script>

<template><AppTableBatchEditor :selected-keys="[]" :fields="fields" button-text="批量调整角色" /></template>
```


### 2.3 保存请求

```vue demo:table-batch-editor-request title="保存请求"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField, type TableRowKey } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref<TableRowKey[]>(["r1", "r2"]);
interface Row { status: string; }
const fields: DataTableBatchEditField<Row>[] = [
  { key: "status", label: "状态", editor: { type: "select" as const, options: [{ label: "启用", value: "enabled" }, { label: "停用", value: "disabled" }] } },
];
const request = async (payload: unknown) => {
  console.log("batch save", payload);
  await new Promise((r) => setTimeout(r, 800));
};
</script>

<template>
  <AppTableBatchEditor v-model:selected-keys="selected" :fields="fields" :request="request" />
</template>
```

### 2.4 提交事件

```vue demo:table-batch-editor-submit title="提交事件"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField, type TableRowKey } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref<TableRowKey[]>(["a"]);
interface Row { owner: string; }
const fields: DataTableBatchEditField<Row>[] = [
  { key: "owner", label: "负责人", editor: { type: "text" as const } },
];
const onSubmit = (payload: unknown) => {
  console.log("submit", payload);
};
</script>

<template>
  <AppTableBatchEditor v-model:selected-keys="selected" :fields="fields" @submit="onSubmit" />
</template>
```

### 2.5 多字段编辑

```vue demo:table-batch-editor-fields title="多字段编辑"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField, type TableRowKey } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref<TableRowKey[]>(["1", "2", "3"]);
interface Row { price: number; category: string; }
const fields: DataTableBatchEditField<Row>[] = [
  { key: "price", label: "调整价格", editor: { type: "number" as const, min: 0, step: 10 } },
  { key: "category", label: "调整分类", editor: { type: "select" as const, options: [{ label: "数码", value: "digital" }, { label: "家居", value: "home" }] } },
];
</script>

<template>
  <AppTableBatchEditor v-model:selected-keys="selected" :fields="fields" button-text="批量调整" />
</template>
```

### 2.6 自定义按钮文案

```vue demo:table-batch-editor-custom-button title="自定义按钮文案"
<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField, type TableRowKey } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref<TableRowKey[]>([]);
interface Row { level: string; }
const fields: DataTableBatchEditField<Row>[] = [
  { key: "level", label: "等级", editor: { type: "select" as const, options: [{ label: "普通", value: "normal" }, { label: "会员", value: "vip" }] } },
];
</script>

<template>
  <AppTableBatchEditor v-model:selected-keys="selected" :fields="fields" button-text="批量设置等级" aria-label="批量设置所选记录的等级" />
</template>
```
## 3. API 使用方式

把表格的 `selectedKeys` 直接传入，并注入一次原子化的批量请求。后端应校验行权限和字段可编辑性。

```vue
<AppTableBatchEditor
  :selected-keys="selectedKeys"
  :fields="batchFields"
  :request="(payload) => updateCourses(payload)"
  @success="reloadTable"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `selectedKeys` | 当前选中的稳定行键。 | `TableRowKey[]` | 必填 |
| `fields` | 可批量修改字段及编辑器配置。 | `DataTableBatchEditField<TRow>[]` | 必填 |
| `request` | 批量保存请求。 | `DataTableBatchEditRequest<TRow>` | — |
| `disabled` | 是否整体禁用。 | `boolean` | `false` |
| `buttonText` / `ariaLabel` | 触发按钮文字与无障碍标签。 | `string` | `"批量修改"` / `"批量编辑所选记录"` |

### 4.2 Slots

该组件不提供插槽；字段编辑器由 `fields[].editor` 自动渲染。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `submit` | `DataTableBatchEditPayload<TRow>` | 未传 `request` 时提交批量负载。 |
| `success` | `DataTableBatchEditPayload<TRow>` | 请求或外部提交完成后触发。 |
| `error` | `payload, message` | 请求失败时返回原负载与错误信息。 |
