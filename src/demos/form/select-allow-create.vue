<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>(["vue"]);
const options = [
  { label: "Vue 3", value: "vue" },
  { label: "React", value: "react" },
  { label: "Svelte", value: "svelte" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="tags" :options="options" multiple filterable allow-create clearable placeholder="选中或输入新标签" aria-label="技术栈" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
