<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" :loading="true" placeholder="正在加载课程列表" aria-label="加载态联想" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
