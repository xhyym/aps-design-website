<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("Vue 3 组件开发");
const readonlyValue = ref("TypeScript 工程化");
const options = [
  { key: "vue", label: "Vue 3 组件开发", value: "Vue 3 组件开发", description: "前端课程" },
];
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="value" :options="options" disabled aria-label="禁用联想" />
    <AppAutocomplete v-model="readonlyValue" :options="options" readonly aria-label="只读联想" />
  </div>
</template>

<style scoped>
.demo-field {
  display: grid;
  gap: 12px;
  width: min(100%, 360px);
}
</style>
