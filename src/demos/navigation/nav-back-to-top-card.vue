<script setup lang="ts">
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="card">
    <p v-for="i in 12" :key="i">卡片内容 {{ i }}。</p>
    <AppBackToTop :threshold="80" />
  </div>
</template>

<style scoped>
.card { height: 240px; overflow: auto; border: 1px solid var(--aps-line-soft); border-radius: 12px; padding: 12px; color: var(--aps-muted); }
</style>
