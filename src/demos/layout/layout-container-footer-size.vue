<script setup lang="ts">
import { AppContainerFooter } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-stack">
    <AppContainerFooter size="small" padding="compact">紧凑底部</AppContainerFooter>
    <AppContainerFooter size="large" padding="spacious">用于多操作项的宽松底部</AppContainerFooter>
  </div>
</template>

<style scoped>
.demo-stack { display: grid; width: min(100%, 480px); gap: 10px; }
.demo-stack :deep(.app-container-footer) { border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
