<script setup lang="ts">
import { AppBrandMark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-marks">
    <AppBrandMark size="small" />
    <AppBrandMark />
    <AppBrandMark size="large" />
    <AppBrandMark size="hero" />
  </div>
</template>

<style scoped>
.demo-marks { display: flex; align-items: center; gap: 18px; }
</style>
