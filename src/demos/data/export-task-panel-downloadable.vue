<script setup lang="ts">
import { AppExportTaskPanel, type ExportTask } from "aps-design-pro";
import "aps-design-pro/style.css";

const tasks: ExportTask[] = [
  { id: "t1", title: "客户名单", status: "succeeded", createdAt: "2026-08-16 18:30", completedAt: "2026-08-16 18:31", downloadable: true, downloadUrl: "/files/customers.xlsx", filename: "customers.xlsx" },
  { id: "t2", title: "库存报表", status: "failed", createdAt: "2026-08-16 19:00", errorMessage: "数据源超时" },
];
</script>

<template>
  <AppExportTaskPanel :tasks="tasks" />
</template>
