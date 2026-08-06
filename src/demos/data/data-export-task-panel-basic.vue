<script setup lang="ts">
import { ref } from "vue";
import { AppExportTaskPanel, type ExportTask } from "aps-design-pro";
import "aps-design-pro/style.css";

const tasks = ref<ExportTask[]>([{ id: "1", title: "订单明细.xlsx", status: "succeeded", createdAt: "10:20", completedAt: "10:21", downloadable: true }]);
function create(): void { tasks.value.unshift({ id: `${Date.now()}`, title: "新的导出任务.xlsx", status: "processing", createdAt: "刚刚", progress: 40 }); }
</script>

<template><AppExportTaskPanel :tasks="tasks" @create="create" @download="(task) => console.info('下载任务：', task.id)" /></template>
