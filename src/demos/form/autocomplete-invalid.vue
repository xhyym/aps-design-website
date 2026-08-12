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
    <AppAutocomplete v-model="value" :options="options" invalid described-by="course-error" placeholder="搜索课程" aria-label="错误联想" />
    <p id="course-error" class="demo-error">未选择有效的课程。</p>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
.demo-error {
  margin: 6px 0 0;
  color: var(--aps-danger, #d4380d);
  font-size: 13px;
}
</style>
