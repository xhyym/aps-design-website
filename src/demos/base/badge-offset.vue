<script setup lang="ts">
import { AppBadge, AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="badge-demo-offset">
    <AppBadge :value="9" :offset="[0, 0]" tone="red" aria-label="默认位置"><AppIconButton icon="bell" label="通知中心" variant="secondary" /></AppBadge>
    <AppBadge :value="9" :offset="[6, -2]" tone="red" aria-label="右下偏移"><AppIconButton icon="bell" label="通知中心" variant="secondary" /></AppBadge>
  </div>
</template>

<style scoped>
.badge-demo-offset {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
