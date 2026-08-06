<script setup lang="ts">
import { AppContainerHeader } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-stack">
    <AppContainerHeader size="small">小尺寸头部</AppContainerHeader>
    <AppContainerHeader size="large" padding="spacious">宽松尺寸头部</AppContainerHeader>
  </div>
</template>

<style scoped>
.demo-stack { display: grid; width: min(100%, 480px); gap: 10px; }
.demo-stack :deep(.app-container-header) { border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
