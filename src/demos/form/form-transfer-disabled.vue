<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["course-2"]);
const options = [
  { key: "course-1", label: "Vue 3 实战", description: "前端课程" },
  { key: "course-2", label: "TypeScript 工程化", description: "前端课程" },
  { key: "course-3", label: "Node.js 服务端", description: "后端课程", disabled: true },
];
</script>

<template>
  <div class="demo-stack">
    <AppTransfer v-model="values" :options="options" disabled aria-label="禁用穿梭" />
    <AppTransfer v-model="values" :options="options" :titles="['课程', '已选课程']" aria-label="含禁用项" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 24px; }
</style>
