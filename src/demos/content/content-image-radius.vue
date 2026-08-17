<script setup lang="ts">
import { AppImage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppImage src="https://picsum.photos/seed/r1/400/300" alt="无圆角" radius="none" />
    <AppImage src="https://picsum.photos/seed/r2/400/300" alt="小圆角" radius="small" />
    <AppImage src="https://picsum.photos/seed/r3/400/300" alt="圆形" radius="round" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; }
.row :deep(.aps-image) { width: 160px; height: 120px; }
</style>
