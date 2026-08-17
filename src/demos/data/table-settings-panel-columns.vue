<script setup lang="ts">
import { ref } from "vue";
import { AppTableSettingsPanel, type TablePreference } from "aps-design-pro";
import "aps-design-pro/style.css";

const pref = ref<TablePreference>({
  version: 1,
  columns: [
    { key: "name", visible: true, order: 0 },
    { key: "price", visible: true, order: 1 },
    { key: "stock", visible: true, order: 2 },
    { key: "status", visible: false, order: 3 },
  ],
  striped: true,
  showColumnDividers: true,
  density: "comfortable",
  updatedAt: Date.now(),
});
const columns = [
  { key: "name", label: "商品名称" },
  { key: "price", label: "单价" },
  { key: "stock", label: "库存" },
  { key: "status", label: "状态" },
];
</script>

<template>
  <AppTableSettingsPanel v-model="pref" :default-value="pref" :columns="columns" />
</template>
