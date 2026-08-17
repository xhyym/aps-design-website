<script setup lang="ts">
import { AppTextScroll } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppTextScroll text="鼠标悬停时暂停滚动 · 移开后继续" :pause-on-hover="true" />
    <AppTextScroll text="始终持续滚动，不响应悬停" :pause-on-hover="false" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
