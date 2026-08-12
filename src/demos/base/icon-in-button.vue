<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-demo-button">
    <AppButton leading-icon="plus">新建</AppButton>
    <AppButton variant="secondary" leading-icon="download">导出</AppButton>
    <AppButton variant="ghost" leading-icon="refresh">刷新</AppButton>
  </div>
</template>

<style scoped>
.icon-demo-button {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
