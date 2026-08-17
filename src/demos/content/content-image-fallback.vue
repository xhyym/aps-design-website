<script setup lang="ts">
import { AppImage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppImage src="https://example.invalid/broken.png" fallback-src="https://picsum.photos/seed/fb/400/300" alt="加载失败回退" />
</template>
