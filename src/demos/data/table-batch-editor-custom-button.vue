<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField, type TableRowKey } from "aps-design-pro";
import "aps-design-pro/style.css";

const selected = ref<TableRowKey[]>([]);
interface Row { level: string; }
const fields: DataTableBatchEditField<Row>[] = [
  { key: "level", label: "等级", editor: { type: "select" as const, options: [{ label: "普通", value: "normal" }, { label: "会员", value: "vip" }] } },
];
</script>

<template>
  <AppTableBatchEditor v-model:selected-keys="selected" :fields="fields" button-text="批量设置等级" aria-label="批量设置所选记录的等级" />
</template>
