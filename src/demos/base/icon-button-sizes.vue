<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton icon="settings" label="偏好设置" size="small" variant="secondary" />
    <AppIconButton icon="settings" label="偏好设置" size="default" variant="secondary" />
    <AppIconButton icon="settings" label="偏好设置" size="large" variant="secondary" />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
