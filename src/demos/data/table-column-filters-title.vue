<script setup lang="ts">
import { ref } from "vue";
import { AppTableColumnFilters, type TableColumnFilterValues } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<TableColumnFilterValues>({});
const fields = [
  { key: "owner", label: "负责人", options: [{ label: "张伟", value: "zw" }, { label: "李娜", value: "ln" }] },
];
</script>

<template>
  <AppTableColumnFilters v-model="values" :fields="fields" title="条件筛选" search-placeholder="搜索负责人" />
</template>
