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
