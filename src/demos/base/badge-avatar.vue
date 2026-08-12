<script setup lang="ts">
import { AppAvatar, AppBadge } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="badge-demo-avatar">
    <AppBadge dot tone="green" aria-label="林知远有新的动态">
      <AppAvatar name="林知远" size="large" />
    </AppBadge>
    <AppBadge :value="3" tone="red" aria-label="陈雨晨 3 条未读">
      <AppAvatar name="陈雨晨" size="large" />
    </AppBadge>
  </div>
</template>

<style scoped>
.badge-demo-avatar {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
