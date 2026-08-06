<script setup lang="ts">
import { AppDataTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface CourseRow {
  id: number;
  name: string;
  students: number;
  status: string;
}

const rows: CourseRow[] = [
  { id: 1, name: "Vue 3 工程化实战", students: 428, status: "已发布" },
  { id: 2, name: "TypeScript 类型设计", students: 316, status: "审核中" },
  { id: 3, name: "前端性能优化", students: 187, status: "已发布" },
];
const columns: DataTableColumn<CourseRow>[] = [
  { key: "name", label: "课程名称", defaultWidth: 240 },
  { key: "students", label: "学习人数", align: "right", sortable: true, defaultWidth: 130 },
  { key: "status", label: "状态", defaultWidth: 120 },
];
</script>

<template><AppDataTable :rows="rows" :columns="columns" row-key="id" aria-label="课程列表" /></template>
