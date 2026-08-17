<script setup lang="ts">
import { AppBrandMark, AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppBrandMark size="small" />
    <AppLogo label="APS Design Pro" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; align-items: center; }
</style>
