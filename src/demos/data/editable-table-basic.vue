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
