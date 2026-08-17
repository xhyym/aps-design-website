<script setup lang="ts">
import { ref } from "vue";
import { AppTableActions } from "aps-design-pro";
import "aps-design-pro/style.css";

const picked = ref("");
const more = [
  { key: "view", label: "查看详情" },
  { key: "archive", label: "归档" },
];
</script>

<template>
  <div>
    <AppTableActions :more-items="more" @select="(k: string) => (picked = k)" />
    <p class="hint">已选操作：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
