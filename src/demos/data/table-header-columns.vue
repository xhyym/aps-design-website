<script setup lang="ts">
import { ref } from "vue";
import { AppTableHeader, type ColumnVisibilityOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const visibility = ref<Record<string, boolean>>({ name: true, author: true, updatedAt: true });
const columnOptions: ColumnVisibilityOption[] = [
  { key: "name", label: "课程名称" },
  { key: "author", label: "讲师" },
  { key: "updatedAt", label: "更新时间" },
];
</script>

<template><AppTableHeader v-model="visibility" title="内容库" :column-options="columnOptions" :show-search="false" :show-density="false" /></template>
