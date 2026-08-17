<script setup lang="ts">
import { AppImage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppImage src="https://picsum.photos/seed/f1/600/400" alt="cover" fit="cover" />
    <AppImage src="https://picsum.photos/seed/f2/600/400" alt="contain" fit="contain" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; }
.row :deep(.aps-image) { width: 240px; height: 160px; }
</style>
