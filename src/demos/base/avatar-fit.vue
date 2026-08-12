<script setup lang="ts">
import { AppAvatar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="avatar-demo-fit">
    <AppAvatar src="https://i.pravatar.cc/200?img=8" fit="cover" size="large" aria-label="cover 填充" />
    <AppAvatar src="https://i.pravatar.cc/200?img=8" fit="contain" size="large" aria-label="contain 填充" />
  </div>
</template>

<style scoped>
.avatar-demo-fit {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
