<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <p class="sync-status">
    <AppIcon name="check" :size="16" />
    最近一次同步已完成
  </p>
</template>

<style scoped>
.sync-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  color: var(--aps-muted);
  font-size: 14px;
}

.sync-status :deep(svg) {
  color: var(--aps-green);
}
</style>
