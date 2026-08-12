<script setup lang="ts">
import { AppText } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="text-demo-sizes">
    <AppText size="small">小号文字</AppText>
    <AppText size="default">默认文字</AppText>
    <AppText size="large">大号文字</AppText>
  </div>
</template>

<style scoped>
.text-demo-sizes {
  display: flex;
  align-items: baseline;
  gap: 14px;
}
</style>
