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
