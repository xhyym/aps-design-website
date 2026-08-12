<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton icon="refresh" label="刷新" variant="ghost" />
    <AppIconButton icon="edit" label="编辑" variant="secondary" />
    <AppIconButton icon="check" label="保存" variant="primary" />
    <AppIconButton icon="trash" label="删除" variant="danger" />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
