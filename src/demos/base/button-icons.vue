<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-icons">
    <AppButton leading-icon="plus">新建</AppButton>
    <AppButton variant="secondary" trailing-icon="arrow-right">下一步</AppButton>
    <AppButton variant="ghost" leading-icon="refresh">刷新</AppButton>
  </div>
</template>

<style scoped>
.button-demo-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
