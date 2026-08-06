<script setup lang="ts">
import { ref } from "vue";
import { AppTableSettingsPanel, type TablePreference } from "aps-design-pro";
import "aps-design-pro/style.css";

const defaultValue: TablePreference = {
  version: 1,
  columns: [{ key: "name", visible: true, order: 0, width: 240, fixed: null }, { key: "status", visible: true, order: 1, width: 120, fixed: null }],
  striped: false,
  showColumnDividers: false,
  density: "comfortable",
  updatedAt: 0,
};
const preference = ref<TablePreference>({ ...defaultValue, columns: defaultValue.columns.map((column) => ({ ...column })) });
const columns = [{ key: "name", label: "课程名称", defaultWidth: 240 }, { key: "status", label: "状态", defaultWidth: 120 }];
</script>

<template><AppTableSettingsPanel v-model="preference" :default-value="defaultValue" :columns="columns" /></template>
