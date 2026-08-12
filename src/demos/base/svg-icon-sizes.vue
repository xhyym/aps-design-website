<script setup lang="ts">
import { AppSvgIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="svg-icon-demo-sizes">
    <AppSvgIcon name="calendar" :size="14" label="小尺寸" />
    <AppSvgIcon name="calendar" :size="18" label="默认尺寸" />
    <AppSvgIcon name="calendar" :size="24" label="大尺寸" />
    <AppSvgIcon name="calendar" :size="32" label="超大尺寸" />
  </div>
</template>

<style scoped>
.svg-icon-demo-sizes {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--aps-text);
}
</style>
