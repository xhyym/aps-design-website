<script setup lang="ts">
import { AppAvatar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="avatar-demo-list">
    <AppAvatar name="林知远" size="large" aria-label="林知远的头像" />
    <AppAvatar initials="周" size="large" shape="square" aria-label="周同学的头像" />
  </div>
</template>

<style scoped>
.avatar-demo-list {
  display: flex;
  align-items: center;
  gap: 14px;
}
</style>
