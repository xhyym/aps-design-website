<script setup lang="ts">
import { ref } from "vue";
import { AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["vue"]);
const options = [
  { label: "Vue 3", value: "vue" },
  { label: "React", value: "react" },
  { label: "TypeScript", value: "typescript" },
  { label: "Node.js", value: "node" },
];
</script>

<template>
  <div class="demo-field">
    <AppSelect v-model="values" :options="options" multiple filterable collapse-tags :multiple-limit="3" placeholder="选择技术标签" aria-label="技术标签" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
