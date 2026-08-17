<script setup lang="ts">
import { AppExportTaskPanel, type ExportTask } from "aps-design-pro";
import "aps-design-pro/style.css";

const tasks: ExportTask[] = [
  { id: "t1", title: "订单导出", status: "processing", createdAt: "2026-08-17 10:00", progress: 45 },
  { id: "t2", title: "商品导出", status: "queued", createdAt: "2026-08-17 10:02" },
];
</script>

<template>
  <AppExportTaskPanel :tasks="tasks" />
</template>
