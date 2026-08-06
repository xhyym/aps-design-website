<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
  { key: "ts", label: "TypeScript 工程化", value: "TypeScript 工程化", description: "前端课程" },
  { key: "node", label: "Node.js 服务端", value: "Node.js 服务端", description: "后端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" clearable placeholder="搜索课程" aria-label="课程搜索" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
