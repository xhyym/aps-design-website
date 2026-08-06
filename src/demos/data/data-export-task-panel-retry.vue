<script setup lang="ts">
import { ref } from "vue";
import { AppExportTaskPanel, type ExportTask } from "aps-design-pro";
import "aps-design-pro/style.css";

const tasks = ref<ExportTask[]>([{ id: "2", title: "客户清单.xlsx", status: "failed", createdAt: "09:14", errorMessage: "文件服务暂不可用" }]);
function retry(task: ExportTask): void { tasks.value = tasks.value.map((item) => item.id === task.id ? { ...item, status: "processing", errorMessage: "", progress: 10 } : item); }
</script>

<template><AppExportTaskPanel :tasks="tasks" @retry="retry" /></template>
