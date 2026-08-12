<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton icon="plus" label="新增" variant="primary" circle />
    <AppIconButton icon="close" label="关闭" variant="secondary" circle />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
