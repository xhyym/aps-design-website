<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-disabled">
    <AppButton disabled>主按钮禁用</AppButton>
    <AppButton variant="secondary" disabled>次按钮禁用</AppButton>
    <AppButton variant="ghost" disabled>幽灵禁用</AppButton>
  </div>
</template>

<style scoped>
.button-demo-disabled {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
