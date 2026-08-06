<script setup lang="ts">
import { ref } from "vue";
import { AppTableColumnFilters, type TableColumnFilter, type TableColumnFilterValues } from "aps-design-pro";
import "aps-design-pro/style.css";

const filters = ref<TableColumnFilterValues>({ status: ["published"] });
const fields: TableColumnFilter[] = [
  { key: "status", label: "课程状态", options: [{ label: "已发布", value: "published" }, { label: "审核中", value: "review" }, { label: "已下架", value: "offline" }] },
  { key: "level", label: "课程难度", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }] },
];
</script>

<template><AppTableColumnFilters v-model="filters" :fields="fields" /></template>
