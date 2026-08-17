<script setup lang="ts">
import { ref } from "vue";
import { AppEditableTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; price: number; }
const rows = ref<Row[]>([
  { id: 1, name: "机械键盘", price: 399 },
  { id: 2, name: "显示器", price: 1299 },
]);
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "商品", editable: true },
  { key: "price", label: "单价", editable: true, align: "right" },
];
const request = async ({ row, value }: { row: Row; value: unknown }) => {
  row.price = Number(value);
  console.log("saved", row.id, value);
};
</script>

<template>
  <AppEditableTable v-model:rows="rows" :columns="columns" row-key="id" :request="request" />
</template>
