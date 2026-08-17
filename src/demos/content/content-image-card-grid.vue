<script setup lang="ts">
import { AppImageCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="grid">
    <AppImageCard v-for="i in 4" :key="i" :title="'作品 ' + i" :src="'https://picsum.photos/seed/g' + i + '/400/260'" />
  </div>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
</style>
