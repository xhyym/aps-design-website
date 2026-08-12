<script setup lang="ts">
import { AppAvatar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="avatar-demo-sizes">
    <AppAvatar name="林知远" size="small" aria-label="小尺寸头像" />
    <AppAvatar name="陈雨晨" size="default" aria-label="默认尺寸头像" />
    <AppAvatar name="王宇航" size="large" aria-label="大尺寸头像" />
    <AppAvatar name="赵晴" :size="48" aria-label="48 像素头像" />
  </div>
</template>

<style scoped>
.avatar-demo-sizes {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
