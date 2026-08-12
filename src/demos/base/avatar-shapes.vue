<script setup lang="ts">
import { AppAvatar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="avatar-demo-shapes">
    <AppAvatar name="林知远" shape="circle" aria-label="圆形头像" />
    <AppAvatar name="陈雨晨" shape="square" aria-label="方形头像" />
  </div>
</template>

<style scoped>
.avatar-demo-shapes {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
