<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton icon="refresh" label="刷新" variant="secondary" disabled />
    <AppIconButton icon="trash" label="删除" variant="danger" disabled />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
