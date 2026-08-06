<script setup lang="ts">
import { ref } from "vue";
import { AppTableColumnFilters, type TableColumnFilter, type TableColumnFilterValues } from "aps-design-pro";
import "aps-design-pro/style.css";

const filters = ref<TableColumnFilterValues>({});
const fields: TableColumnFilter[] = [
  { key: "region", label: "服务区域", options: [{ label: "华东", value: "east" }, { label: "华南", value: "south" }] },
];
</script>

<template><AppTableColumnFilters v-model="filters" :fields="fields" title="订单筛选" search-placeholder="搜索区域" /></template>
