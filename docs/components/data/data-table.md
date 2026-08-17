---
title: 数据表格
component: AppDataTable
category: data
source: packages/ui/src/components/data/AppDataTable.vue
---

# 数据表格（AppDataTable）

`AppDataTable` 将列定义、行选择、排序、固定列、虚拟滚动和单元格插槽统一在一张可受控的数据表中。

## 1. 用处

- 用于订单、用户、课程等有固定字段的后台数据列表。
- 页面持有行数据、筛选条件和查询请求；表格只负责呈现与交互状态。
- 通过 `columns` 管理列宽、对齐、排序、编辑与冻结位置，避免散落的表格配置。

## 2. 代码演示

### 2.1 基础列表

```vue demo:data-table-basic title="基础数据表格"
<script setup lang="ts">
import { AppDataTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface CourseRow {
  id: number;
  name: string;
  students: number;
  status: string;
}

const rows: CourseRow[] = [
  { id: 1, name: "Vue 3 工程化实战", students: 428, status: "已发布" },
  { id: 2, name: "TypeScript 类型设计", students: 316, status: "审核中" },
  { id: 3, name: "前端性能优化", students: 187, status: "已发布" },
];
const columns: DataTableColumn<CourseRow>[] = [
  { key: "name", label: "课程名称", defaultWidth: 240 },
  { key: "students", label: "学习人数", align: "right", sortable: true, defaultWidth: 130 },
  { key: "status", label: "状态", defaultWidth: 120 },
];
</script>

<template><AppDataTable :rows="rows" :columns="columns" row-key="id" aria-label="课程列表" /></template>
```

### 2.2 多选、序号与列分割线

```vue demo:data-table-selection title="可选择的订单列表"
<script setup lang="ts">
import { ref } from "vue";
import { AppDataTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface OrderRow {
  id: string;
  buyer: string;
  amount: number;
}

const selectedKeys = ref<Array<string | number>>(["SO-1002"]);
const rows: OrderRow[] = [
  { id: "SO-1001", buyer: "青禾教育", amount: 3280 },
  { id: "SO-1002", buyer: "星桥科技", amount: 5680 },
  { id: "SO-1003", buyer: "知行学院", amount: 2160 },
];
const columns: DataTableColumn<OrderRow>[] = [
  { key: "id", label: "订单号", fixed: "left", defaultWidth: 150 },
  { key: "buyer", label: "客户", defaultWidth: 180 },
  { key: "amount", label: "订单金额", align: "right", defaultWidth: 140 },
];
</script>

<template><AppDataTable v-model:selected-keys="selectedKeys" :rows="rows" :columns="columns" row-key="id" selectable show-index striped show-column-dividers aria-label="可选择的订单列表" /></template>
```


### 2.3 加载状态

```vue demo:data-table-loading title="加载状态"
<script setup lang="ts">
import { AppDataTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; sales: number; }
const rows: Row[] = [
  { id: 1, name: "华东大区", sales: 3200 },
  { id: 2, name: "华南大区", sales: 2100 },
];
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "大区" },
  { key: "sales", label: "销售额", align: "right" },
];
</script>

<template><AppDataTable :rows="rows" :columns="columns" row-key="id" loading /></template>
```

### 2.4 列排序

```vue demo:data-table-sort title="列排序"
<script setup lang="ts">
import { ref } from "vue";
import { AppDataTable, type DataTableColumn, type DataTableSort } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; score: number; }
const rows: Row[] = [
  { id: 1, name: "王芳", score: 92 },
  { id: 2, name: "李强", score: 87 },
  { id: 3, name: "赵敏", score: 95 },
];
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "姓名" },
  { key: "score", label: "得分", sortable: true, align: "right" },
];
const sort = ref<DataTableSort | null>(null);
</script>

<template>
  <AppDataTable v-model:sort="sort" :rows="rows" :columns="columns" row-key="id" />
</template>
```

### 2.5 操作列

```vue demo:data-table-actions title="操作列"
<script setup lang="ts">
import { AppButton, AppDataTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; status: string; }
const rows: Row[] = [
  { id: 1, name: "服务器 A", status: "运行中" },
  { id: 2, name: "服务器 B", status: "已停止" },
];
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "实例" },
  { key: "status", label: "状态" },
];
</script>

<template>
  <AppDataTable :rows="rows" :columns="columns" row-key="id" action-label="操作">
    <template #actions="{ row }">
      <AppButton size="small" variant="text" @click="row.status = '运行中'">启动</AppButton>
      <AppButton size="small" variant="text" tone="danger" @click="row.status = '已停止'">停止</AppButton>
    </template>
  </AppDataTable>
</template>
```

### 2.6 边框与斑马纹

```vue demo:data-table-bordered title="边框与斑马纹"
<script setup lang="ts">
import { AppDataTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; city: string; orders: number; }
const rows: Row[] = [
  { id: 1, city: "上海", orders: 1280 },
  { id: 2, city: "北京", orders: 1102 },
  { id: 3, city: "深圳", orders: 986 },
];
const columns: DataTableColumn<Row>[] = [
  { key: "city", label: "城市" },
  { key: "orders", label: "订单数", align: "right" },
];
</script>

<template>
  <AppDataTable :rows="rows" :columns="columns" row-key="id" bordered striped show-column-dividers />
</template>
```

### 2.7 空数据

```vue demo:data-table-empty title="空数据"
<script setup lang="ts">
import { AppDataTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; }
const rows: Row[] = [];
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "名称" },
];
</script>

<template>
  <AppDataTable :rows="rows" :columns="columns" row-key="id" empty-title="暂无数据" empty-description="调整筛选条件后再试" />
</template>
```
## 3. API 使用方式

将表格交互状态定义在业务页面；当 `sort-change`、选择或列宽变化时，按业务需要更新请求参数或持久化偏好。

```vue
<AppDataTable
  v-model:selected-keys="selectedKeys"
  v-model:column-widths="columnWidths"
  :rows="response.records"
  :columns="columns"
  row-key="id"
  selectable
  resizable
  @sort-change="reloadBySort"
  @row-click="openDetail"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `rows` | 要展示的行数据。 | `TRow[]` | 必填 |
| `columns` | 列定义，支持宽度、冻结、排序、编辑和溢出策略。 | `DataTableColumn<TRow>[]` | 必填 |
| `rowKey` | 行唯一键字段。 | `keyof TRow` | 必填 |
| `loading` / `errorMessage` | 加载与错误状态。 | `boolean` / `string` | `false` / `""` |
| `selectable` / `selectedKeys` | 是否可选中，以及受控的已选行键。 | `boolean` / `TableRowKey[]` | `false` / `[]` |
| `currentRowKey` / `highlightCurrentRow` | 当前行和高亮当前行开关。 | `TableRowKey \| null` / `boolean` | `null` / `false` |
| `sort` | 当前排序条件。 | `DataTableSort \| null` | `null` |
| `actionLabel` | 操作列标题；传入后显示 `actions` 插槽列。 | `string` | `""` |
| `emptyTitle` / `emptyDescription` / `emptyIcon` | 空数据状态的文案与图标。 | `string` / `"grid" \| "users" \| "shield" \| "menu"` | 内置文案 / `"grid"` |
| `bordered` / `showColumnDividers` / `striped` | 外边框、列分割线、斑马纹。 | `boolean` | `false` |
| `showOverflowTooltip` | 默认截断单元格是否展示完整内容提示。 | `boolean` | `false` |
| `size` / `showIndex` | 表格密度与序号列。 | `ControlSize` / `boolean` | `"default"` / `false` |
| `expandable` / `expandedKeys` | 是否显示展开行及其受控状态。 | `boolean` / `TableRowKey[]` | `false` / `[]` |
| `treeChildrenKey` / `treeColumnKey` / `treeExpandedKeys` / `treeIndent` | 树表格子字段、承载列、展开键和缩进。 | `keyof TRow \| null` / `TableRowKey[]` / `number` | `null` / `[]` / `18` |
| `fullscreen` | 是否以视口全屏展示表格。 | `boolean` | `false` |
| `virtual` / `virtualHeight` / `virtualRowHeight` / `virtualOverscan` | 虚拟滚动及其视口、行高、预渲染缓冲。 | `boolean` / `number` | `false` / `520` / `72` / `6` |
| `fillHeight` | 让表体填充父容器可用高度。 | `boolean` | `false` |
| `resizable` / `columnWidths` / `minColumnWidth` / `maxColumnWidth` | 列宽拖拽与受控宽度边界。 | `boolean` / `Record<string, number>` / `number` | `false` / `{}` / `96` / `960` |
| `editable` / `editTrigger` | 内置单元格编辑及触发方式。 | `boolean` / `"click" \| "dblclick"` | `false` / `"dblclick"` |
| `headerGroups` | 连续列分组表头定义。 | `DataTableHeaderGroup[]` | `[]` |
| `showSummary` / `summaryLabel` / `summaryMethod` | 汇总行开关、标签及每列汇总函数。 | `boolean` / `string` / `DataTableSummaryMethod<TRow>` | `false` / `"合计"` / — |
| `rowClassName` / `cellClassName` / `spanMethod` | 行类名、单元格类名、原生跨行跨列规则。 | `string \| function` / `function` | — |
| `ariaLabel` | 表格无障碍名称。 | `string` | `"数据表"` |

### 4.2 Slots

| 插槽 | 参数 | 说明 |
| --- | --- | --- |
| `cell-{columnKey}` | `{ row, column, rowIndex, value }` | 自定义指定列的单元格。 |
| `actions` | `{ row, rowIndex }` | 操作列内容，需要同时提供 `actionLabel`。 |
| `expand` | `{ row, rowIndex }` | 展开行详情内容。 |
| `summary-{columnKey}` | `{ column, value }` | 自定义指定列的汇总值。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:selectedKeys` / `update:currentRowKey` | 已选键 / 当前行键 | 同步行选择状态。 |
| `update:expandedKeys` / `update:treeExpandedKeys` | `TableRowKey[]` | 同步展开或树展开状态。 |
| `update:fullscreen` / `update:columnWidths` | `boolean` / 宽度映射 | 同步全屏与列宽。 |
| `row-click` / `sort-change` | 行上下文 / 排序条件 | 点击行或更改排序时触发。 |
| `edit-start` / `edit-save` / `edit-cancel` | 编辑上下文与值 | 使用内置编辑时触发。 |
| `retry` | — | 错误状态的重试按钮被点击时触发。 |
