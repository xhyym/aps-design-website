<script setup lang="ts">
import { AppThemeSvg } from "aps-design-pro";
</script>

<template>
  <div class="theme-svg-demo-sizes">
    <AppThemeSvg name="settings" :size="16" label="小" />
    <AppThemeSvg name="settings" :size="22" label="中" />
    <AppThemeSvg name="settings" :size="30" label="大" />
  </div>
</template>

<style scoped>
.theme-svg-demo-sizes {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--aps-text);
}
</style>
