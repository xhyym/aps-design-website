<script setup lang="ts">
import { AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-logos">
    <AppLogo compact />
    <AppLogo label="仅显示标记" compact />
  </div>
</template>

<style scoped>
.demo-logos { display: flex; align-items: center; gap: 24px; }
</style>
