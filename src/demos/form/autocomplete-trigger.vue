<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
  { key: "ts", label: "TypeScript 工程化", value: "TypeScript 工程化", description: "前端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" :trigger-on-focus="false" placeholder="聚焦不查询，输入才联想" aria-label="不聚焦查询" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
