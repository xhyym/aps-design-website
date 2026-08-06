<script setup lang="ts">
import { ref } from "vue";
import { AppTableSettingsPanel, type TablePreference } from "aps-design-pro";
import "aps-design-pro/style.css";

const defaultValue: TablePreference = {
  version: 1,
  columns: [{ key: "id", visible: true, order: 0, width: 120, fixed: "left" }, { key: "amount", visible: true, order: 1, width: 160, fixed: null }],
  striped: true,
  showColumnDividers: true,
  density: "compact",
  updatedAt: 0,
};
const preference = ref<TablePreference>({ ...defaultValue, columns: defaultValue.columns.map((column) => ({ ...column })) });
const columns = [{ key: "id", label: "订单号", minWidth: 120, maxWidth: 220 }, { key: "amount", label: "金额", minWidth: 120, maxWidth: 240 }];
</script>

<template><AppTableSettingsPanel v-model="preference" :default-value="defaultValue" :columns="columns" :min-visible="1" :min-column-width="110" :max-column-width="300" /></template>
