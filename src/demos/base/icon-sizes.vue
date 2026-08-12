<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-demo-sizes">
    <AppIcon name="settings" :size="16" />
    <AppIcon name="settings" :size="24" />
    <AppIcon name="settings" :size="32" />
    <AppIcon name="settings" :size="48" />
  </div>
</template>

<style scoped>
.icon-demo-sizes {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--aps-ink);
}
</style>
