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
