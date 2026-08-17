<script setup lang="ts">
import { AppScrollbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppScrollbar height="140px">
    <p v-for="i in 30" :key="i" class="line">日志记录 #{{ i }}</p>
  </AppScrollbar>
</template>

<style scoped>
.line { margin: 0; padding: 6px 12px; font-size: 13px; border-bottom: 1px solid var(--aps-border); }
</style>
