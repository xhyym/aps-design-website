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
    <AppAutocomplete v-model="value" :options="options" empty-text="没有找到相关课程" placeholder="搜索课程" aria-label="自定义空文案" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
