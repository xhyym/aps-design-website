<script setup lang="ts">
import { AppColumnSettings, AppTableOperationBar, AppTableViewSelector, type ColumnVisibilityOption, type TableView } from "aps-design-pro";
import "aps-design-pro/style.css";

const views: TableView[] = [{ id: "default", name: "默认视图", kind: "default", createdAt: 0, updatedAt: 0 }];
const columnOptions: ColumnVisibilityOption[] = [{ key: "name", label: "课程名称" }, { key: "status", label: "状态" }];
</script>

<template><AppTableOperationBar show-refresh show-fullscreen><template #view><AppTableViewSelector model-value="default" :views="views" /></template><template #settings><AppColumnSettings :model-value="{ name: true, status: true }" :options="columnOptions" /></template></AppTableOperationBar></template>
