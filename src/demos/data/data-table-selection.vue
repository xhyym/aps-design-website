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
