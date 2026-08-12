<script setup lang="ts">
import { AppBadge, AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="badge-demo-tones">
    <AppBadge :value="5" tone="blue" aria-label="蓝色提醒 5 条"><AppIconButton icon="bell" label="通知" variant="secondary" /></AppBadge>
    <AppBadge :value="5" tone="red" aria-label="红色提醒 5 条"><AppIconButton icon="warning" label="告警" variant="secondary" /></AppBadge>
    <AppBadge :value="5" tone="green" aria-label="绿色提醒 5 条"><AppIconButton icon="check" label="完成" variant="secondary" /></AppBadge>
    <AppBadge :value="5" tone="orange" aria-label="橙色提醒 5 条"><AppIconButton icon="settings" label="待办" variant="secondary" /></AppBadge>
    <AppBadge :value="5" tone="neutral" aria-label="中性提醒 5 条"><AppIconButton icon="user" label="成员" variant="secondary" /></AppBadge>
  </div>
</template>

<style scoped>
.badge-demo-tones {
  display: flex;
  align-items: center;
  gap: 18px;
}
</style>
