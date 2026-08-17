<script setup lang="ts">
import { ref } from "vue";
import { AppDataTable, type DataTableColumn, type DataTableSort } from "aps-design-pro";
import "aps-design-pro/style.css";

interface Row { id: number; name: string; score: number; }
const rows: Row[] = [
  { id: 1, name: "王芳", score: 92 },
  { id: 2, name: "李强", score: 87 },
  { id: 3, name: "赵敏", score: 95 },
];
const columns: DataTableColumn<Row>[] = [
  { key: "name", label: "姓名" },
  { key: "score", label: "得分", sortable: true, align: "right" },
];
const sort = ref<DataTableSort | null>(null);
</script>

<template>
  <AppDataTable v-model:sort="sort" :rows="rows" :columns="columns" row-key="id" />
</template>
