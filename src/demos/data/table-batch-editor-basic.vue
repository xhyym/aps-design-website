<script setup lang="ts">
import { ref } from "vue";
import { AppTableBatchEditor, type DataTableBatchEditField } from "aps-design-pro";
import "aps-design-pro/style.css";

interface CourseRow {
  id: number;
  status: string;
  quota: number;
}

const selectedKeys = ref<Array<string | number>>([1, 2, 3]);
const fields: DataTableBatchEditField<CourseRow>[] = [
  { key: "status", label: "发布状态", editor: { type: "select", options: [{ label: "已发布", value: "published" }, { label: "已下架", value: "offline" }] } },
  { key: "quota", label: "学习配额", editor: { type: "number", min: 0, step: 10 } },
];
</script>

<template><AppTableBatchEditor :selected-keys="selectedKeys" :fields="fields" /></template>
