<script setup lang="ts">
import { AppContainerHeader, AppDivider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-shell">
    <AppContainerHeader bordered>成员管理</AppContainerHeader>
    <AppDivider />
    <AppContainerHeader padding="compact">紧凑工具栏</AppContainerHeader>
  </div>
</template>

<style scoped>
.demo-shell { width: min(100%, 480px); border: 1px solid var(--aps-line-soft); }
.demo-shell :deep(.app-divider) { margin: 0; }
</style>
