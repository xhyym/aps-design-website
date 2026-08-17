<script setup lang="ts">
import { AppExportTaskPanel, type ExportTask } from "aps-design-pro";
import "aps-design-pro/style.css";

const tasks: ExportTask[] = [];
</script>

<template>
  <AppExportTaskPanel :tasks="tasks" empty-text="暂无导出任务" />
</template>
