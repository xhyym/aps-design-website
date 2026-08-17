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
