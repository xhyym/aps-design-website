<script setup lang="ts">
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 20" :key="i">长页面，滚动超过 600px 才出现按钮。</p>
    <AppBackToTop :threshold="600" />
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; padding: 12px; }
</style>
