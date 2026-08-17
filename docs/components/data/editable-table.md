---
title: 可编辑表格
component: AppEditableTable
category: data
source: packages/ui/src/components/data/AppEditableTable.vue
---

# 可编辑表格（AppEditableTable）

`AppEditableTable` 在 `AppDataTable` 的基础上提供可校验、可等待保存结果的单元格编辑流程。

## 1. 用处

- 适合名单配额、工单优先级、商品库存等轻量级的就地修改。
- 编辑器由列的 `editor` 配置决定，可使用文本、数字或选择器。
- 保存请求由页面注入；请求失败时编辑器保持打开，便于用户修正。

## 2. 代码演示

### 2.1 单击编辑文本和数值

```vue demo:editable-table-basic title="单击编辑"
<script setup lang="ts">
import { ref } from "vue";
import { AppEditableTable, type DataTableColumn, type DataTableEditContext, type DataTableEditorValue } from "aps-design-pro";
import "aps-design-pro/style.css";

interface MemberRow {
  id: number;
  name: string;
  quota: number;
}

const rows = ref<MemberRow[]>([
  { id: 1, name: "林晓", quota: 18 },
  { id: 2, name: "周青", quota: 24 },
]);
const columns: DataTableColumn<MemberRow>[] = [
  { key: "name", label: "成员", editable: true, editor: { placeholder: "输入成员名称" } },
  { key: "quota", label: "本月配额", editable: true, editor: { type: "number", min: 0, step: 1 }, align: "right" },
];

function saveEdit(context: DataTableEditContext<MemberRow>, value: DataTableEditorValue): void {
  const target = rows.value.find((item) => item.id === context.rowKey);
  if (target && (typeof value === "string" || typeof value === "number")) target[context.column.key] = value as never;
}
</script>

<template><AppEditableTable :rows="rows" :columns="columns" row-key="id" edit-trigger="click" @edit-save="saveEdit" /></template>
```

### 2.2 双击编辑枚举字段

```vue demo:editable-table-select title="选择型编辑器"
<script setup lang="ts">
import { AppEditableTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface TicketRow {
  id: string;
  subject: string;
  priority: string;
}

const rows: TicketRow[] = [
  { id: "T-101", subject: "支付页加载异常", priority: "high" },
  { id: "T-102", subject: "补充课程封面", priority: "normal" },
];
const columns: DataTableColumn<TicketRow>[] = [
  { key: "subject", label: "事项", editable: true, editor: { placeholder: "输入事项" } },
  { key: "priority", label: "优先级", editable: true, editor: { type: "select", options: [{ label: "高", value: "high" }, { label: "普通", value: "normal" }, { label: "低", value: "low" }] } },
];
</script>

<template><AppEditableTable :rows="rows" :columns="columns" row-key="id" edit-trigger="dblclick" /></template>
```


### 2.3 本地校验

```vue demo:editable-table-validator title="本地校验"
<script setup lang="ts">
import { AppEditableTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; score: number; }
const rows: Row[] = [
  { id: 1, name: "Vue 3", score: 95 },
  { id: 2, name: "TS 类型", score: 88 },
];
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "课程", editable: true },
  { key: "score", label: "得分", editable: true, align: "right" },
];
const validator = (_context: unknown, value: string | number | boolean | null) => {
  const num = Number(value);
  if (Number.isNaN(num) || num < 0 || num > 100) return "得分需在 0-100 之间";
  return undefined;
};
</script>

<template>
  <AppEditableTable :rows="rows" :columns="columns" row-key="id" :validator="validator" />
</template>
```

### 2.4 保存请求

```vue demo:editable-table-request title="保存请求"
<script setup lang="ts">
import { ref } from "vue";
import { AppEditableTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; price: number; }
const rows = ref<Row[]>([
  { id: 1, name: "机械键盘", price: 399 },
  { id: 2, name: "显示器", price: 1299 },
]);
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "商品", editable: true },
  { key: "price", label: "单价", editable: true, align: "right" },
];
const request = async ({ row, value }: { row: Row; value: unknown }) => {
  row.price = Number(value);
  console.log("saved", row.id, value);
};
</script>

<template>
  <AppEditableTable v-model:rows="rows" :columns="columns" row-key="id" :request="request" />
</template>
```

### 2.5 自定义编辑器

```vue demo:editable-table-custom-editor title="自定义编辑器"
<script setup lang="ts">
import { ref } from "vue";
import { AppEditableTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; status: string; }
const rows = ref<Row[]>([
  { id: 1, name: "发布流程", status: "进行中" },
  { id: 2, name: "数据迁移", status: "待开始" },
]);
const statusOptions = [
  { label: "待开始", value: "待开始" },
  { label: "进行中", value: "进行中" },
  { label: "已完成", value: "已完成" },
];
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "任务" },
  { key: "status", label: "状态", editable: true, editor: { type: "select", options: statusOptions } },
];
</script>

<template>
  <div>
    <p class="hint">双击状态单元格，使用下拉选择器编辑。</p>
    <AppEditableTable :rows="rows" :columns="columns" row-key="id" edit-trigger="click" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-bottom: 8px; }
</style>
```

### 2.6 自定义展示

```vue demo:editable-table-display-slot title="自定义展示"
<script setup lang="ts">
import { ref } from "vue";
import { AppEditableTable, AppTag, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; status: string; }
const rows = ref<Row[]>([
  { id: 1, name: "前端发布会", status: "success" },
  { id: 2, name: "组件评审", status: "pending" },
]);
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "名称", editable: true },
  { key: "status", label: "状态" },
];
</script>

<template>
  <AppEditableTable :rows="rows" :columns="columns" row-key="id">
    <template #display-status="{ value }">
      <AppTag :tone="value === 'success' ? 'green' : 'orange'">{{ value === "success" ? "已通过" : "待评审" }}</AppTag>
    </template>
  </AppEditableTable>
</template>
```

### 2.7 受控编辑位置

```vue demo:editable-table-controlled title="受控编辑位置"
<script setup lang="ts">
import { ref } from "vue";
import { AppEditableTable, type DataTableColumn, type DataTableEditingCell } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; title: string; }
const rows = ref<Row[]>([
  { id: 1, title: "需求评审" },
  { id: 2, title: "技术方案" },
]);
const columns: DataTableColumn<Row>[] = [
  { key: "title", label: "标题", editable: true },
];
const editing = ref<DataTableEditingCell | null>({ rowKey: 1, columnKey: "title" });
</script>

<template>
  <AppEditableTable v-model:editing-cell="editing" :rows="rows" :columns="columns" row-key="id" />
</template>
```
## 3. API 使用方式

通过 `request` 接入保存接口。接口 resolve 后才会触发 `edit-save`；reject 或抛错后会保留编辑值并显示错误信息。

```vue
<AppEditableTable
  :rows="rows"
  :columns="columns"
  row-key="id"
  :request="({ rowKey, column }, value) => updateCell(rowKey, column.key, value)"
  @edit-save="syncLocalRow"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `rows` / `columns` / `rowKey` | 行数据、列配置和行唯一键。 | `TRow[]` / `DataTableColumn[]` / `keyof TRow` | 必填 |
| `editingCell` | 当前编辑单元格，传入后使用受控模式。 | `DataTableEditingCell \| null` | — |
| `saving` / `errorMessage` | 外部保存状态与错误提示。 | `boolean` / `string` | `false` / `""` |
| `editTrigger` | 开始编辑的方式。 | `"click" \| "dblclick"` | `"dblclick"` |
| `validator` | 本地校验函数，返回错误文案时阻止提交。 | `DataTableEditValidator<TRow>` | — |
| `request` | 保存请求，成功后组件关闭编辑器。 | `DataTableEditRequest<TRow>` | — |

其余 `AppDataTable` 属性会通过 `$attrs` 继续传递，例如 `striped`、`selectable` 和 `actionLabel`。

### 4.2 Slots

| 插槽 | 参数 | 说明 |
| --- | --- | --- |
| `display-{columnKey}` | 单元格上下文 | 自定义非编辑态展示。 |
| `edit-{columnKey}` | 单元格上下文、`draft`、`save`、`cancel`、`saving` | 替换指定列的编辑器。 |
| `cell-{columnKey}` 等 | 同 `AppDataTable` | 未被编辑表格消费的表格插槽会继续透传。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:editingCell` | `DataTableEditingCell \| null` | 同步受控编辑位置。 |
| `edit-start` / `edit-save` / `edit-cancel` | 编辑上下文与值 | 编辑生命周期事件。 |
| `edit-error` | 编辑上下文、值、错误文案 | 校验或请求失败时触发。 |
