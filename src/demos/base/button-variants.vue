<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-variants">
    <AppButton variant="primary">主要操作</AppButton>
    <AppButton variant="secondary">次要操作</AppButton>
    <AppButton variant="ghost">幽灵操作</AppButton>
    <AppButton variant="danger">危险操作</AppButton>
    <AppButton variant="text">文字操作</AppButton>
  </div>
</template>

<style scoped>
.button-demo-variants {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
