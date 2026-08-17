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
