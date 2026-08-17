<script setup lang="ts">
import { ref } from "vue";
import { AppWorkTab } from "aps-design-pro";
import "aps-design-pro/style.css";

const current = ref("");
const items = [
  { key: "a", label: "文档" },
  { key: "b", label: "表格" },
];
</script>

<template>
  <div>
    <AppWorkTab :items="items" model-value="a" @update:model-value="(k: string) => (current = k)" />
    <p class="hint">当前：{{ current || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
