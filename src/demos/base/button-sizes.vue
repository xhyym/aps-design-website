<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-sizes">
    <AppButton size="small">小尺寸</AppButton>
    <AppButton size="default">默认尺寸</AppButton>
    <AppButton size="large">大尺寸</AppButton>
  </div>
</template>

<style scoped>
.button-demo-sizes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
</style>
