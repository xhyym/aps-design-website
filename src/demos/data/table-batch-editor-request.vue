<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField, type TableRowKey } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref<TableRowKey[]>(["r1", "r2"]);
interface Row { status: string; }
const fields: DataTableBatchEditField<Row>[] = [
  { key: "status", label: "状态", editor: { type: "select" as const, options: [{ label: "启用", value: "enabled" }, { label: "停用", value: "disabled" }] } },
];
const request = async (payload: unknown) => {
  console.log("batch save", payload);
  await new Promise((r) => setTimeout(r, 800));
};
</script>

<template>
  <AppTableBatchEditor v-model:selected-keys="selected" :fields="fields" :request="request" />
</template>
