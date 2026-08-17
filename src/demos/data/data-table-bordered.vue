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
