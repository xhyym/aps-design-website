<script setup lang="ts">
import { ref } from "vue";
import { AppTableColumnFilters, type TableColumnFilterValues } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<TableColumnFilterValues>({ status: ["active"] });
const fields = [
  { key: "status", label: "状态", options: [{ label: "启用", value: "active" }, { label: "停用", value: "disabled" }] },
  { key: "region", label: "区域", options: [{ label: "华东", value: "east" }, { label: "华南", value: "south" }] },
];
</script>

<template>
  <AppTableColumnFilters v-model="values" :fields="fields" />
</template>
