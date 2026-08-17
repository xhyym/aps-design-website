<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField, type TableRowKey } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref<TableRowKey[]>(["1", "2", "3"]);
interface Row { price: number; category: string; }
const fields: DataTableBatchEditField<Row>[] = [
  { key: "price", label: "调整价格", editor: { type: "number" as const, min: 0, step: 10 } },
  { key: "category", label: "调整分类", editor: { type: "select" as const, options: [{ label: "数码", value: "digital" }, { label: "家居", value: "home" }] } },
];
</script>

<template>
  <AppTableBatchEditor v-model:selected-keys="selected" :fields="fields" button-text="批量调整" />
</template>
