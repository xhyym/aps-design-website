<script setup lang="ts">
import { AppTextScroll } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppTextScroll text="第一条滚动消息" />
    <AppTextScroll text="第二条滚动消息" :speed="10" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
