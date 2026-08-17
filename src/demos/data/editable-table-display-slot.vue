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
