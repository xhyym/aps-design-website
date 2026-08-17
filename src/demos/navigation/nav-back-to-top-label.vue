<script setup lang="ts">
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 12" :key="i">为按钮提供更具语义的可访问名称。</p>
    <AppBackToTop label="返回页首" />
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; padding: 12px; }
</style>
