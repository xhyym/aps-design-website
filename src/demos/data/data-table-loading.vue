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
