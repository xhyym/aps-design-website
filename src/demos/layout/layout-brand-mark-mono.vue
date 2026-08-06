<script setup lang="ts">
import { AppBrandMark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-marks">
    <div><AppBrandMark size="large" /><span>默认</span></div>
    <div><AppBrandMark size="large" tone="mono" /><span>单色</span></div>
  </div>
</template>

<style scoped>
.demo-marks { display: flex; align-items: center; gap: 32px; }
.demo-marks div { display: grid; justify-items: center; gap: 8px; color: var(--aps-muted); font-size: 12px; }
</style>
