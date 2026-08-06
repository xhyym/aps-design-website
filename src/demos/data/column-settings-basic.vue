<script setup lang="ts">
import { ref } from "vue";
import { AppColumnSettings, type ColumnVisibilityOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const visibility = ref<Record<string, boolean>>({ name: true, author: true, updatedAt: false });
const options: ColumnVisibilityOption[] = [{ key: "name", label: "课程名称" }, { key: "author", label: "讲师" }, { key: "updatedAt", label: "更新时间" }];
</script>

<template><AppColumnSettings v-model="visibility" :options="options" /></template>
