<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>([]);
const options = [
  { label: "前端", value: "frontend", children: [{ label: "框架", value: "framework", children: [{ label: "Vue", value: "vue" }, { label: "React", value: "react" }] }, { label: "构建", value: "build", children: [{ label: "Vite", value: "vite" }, { label: "Webpack", value: "webpack" }] }] },
  { label: "服务端", value: "backend", children: [{ label: "语言", value: "language", children: [{ label: "Node.js", value: "node" }, { label: "Go", value: "go" }] }] },
];
</script>

<template>
  <div class="demo-field">
    <AppCascader v-model="value" :options="options" filterable clearable placeholder="按关键词筛选层级" aria-label="技术栈" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 400px); }
</style>
