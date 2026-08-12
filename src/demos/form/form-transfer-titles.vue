<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["course-2"]);
const options = [
  { key: "course-1", label: "Vue 3 实战", description: "前端课程" },
  { key: "course-2", label: "TypeScript 工程化", description: "前端课程" },
  { key: "course-3", label: "Node.js 服务端", description: "后端课程" },
];
</script>

<template><AppTransfer v-model="values" :options="options" :titles="['全部课程', '已选课程']" aria-label="课程分配" /></template>
