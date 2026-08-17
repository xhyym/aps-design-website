<script setup lang="ts">
import { AppBrandMark, AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppBrandMark size="small" />
    <AppBrandMark size="small" tone="mono" />
    <AppLogo label="APS Design" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; align-items: center; }
</style>
