<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[][]>([]);
const options = [
  { label: "前端", value: "frontend", children: [{ label: "Vue", value: "vue" }, { label: "React", value: "react" }] },
  { label: "服务端", value: "backend", children: [{ label: "Node.js", value: "node" }, { label: "Java", value: "java" }] },
];
</script>

<template>
  <div class="demo-field">
    <AppCascader v-model="values" :options="options" multiple check-strictly collapse-tags placeholder="选择课程方向" aria-label="课程方向" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 400px); }
</style>
