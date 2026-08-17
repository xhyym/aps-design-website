<script setup lang="ts">
import { AppImage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="list">
    <AppImage v-for="i in 8" :key="i" :src="'https://picsum.photos/seed/lazy' + i + '/600/400'" :alt="'图片 ' + i" lazy />
  </div>
</template>

<style scoped>
.list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
</style>
