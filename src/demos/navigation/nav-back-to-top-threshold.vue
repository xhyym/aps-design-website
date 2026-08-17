<script setup lang="ts">
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 14" :key="i">滚动超过 120px 后显示回到顶部按钮。</p>
    <AppBackToTop :threshold="120" />
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; padding: 12px; }
</style>
