<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-shapes">
    <AppButton block>撑满宽度</AppButton>
    <AppButton plain>浅色填充</AppButton>
    <AppButton round>胶囊圆角</AppButton>
    <AppButton circle aria-label="设置" leading-icon="settings" />
  </div>
</template>

<style scoped>
.button-demo-shapes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
</style>
