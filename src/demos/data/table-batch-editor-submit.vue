<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField, type TableRowKey } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref<TableRowKey[]>(["a"]);
interface Row { owner: string; }
const fields: DataTableBatchEditField<Row>[] = [
  { key: "owner", label: "负责人", editor: { type: "text" as const } },
];
const onSubmit = (payload: unknown) => {
  console.log("submit", payload);
};
</script>

<template>
  <AppTableBatchEditor v-model:selected-keys="selected" :fields="fields" @submit="onSubmit" />
</template>
