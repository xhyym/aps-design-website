<script setup lang="ts">
import { AppAvatar, AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="avatar-demo-icon">
    <AppAvatar icon="user" size="large" aria-label="用户头像" />
    <AppAvatar icon="shield" shape="square" size="large" aria-label="安全角色头像" />
  </div>
</template>

<style scoped>
.avatar-demo-icon {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
