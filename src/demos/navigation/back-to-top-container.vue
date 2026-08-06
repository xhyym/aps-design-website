<script setup lang="ts">
import { ref } from "vue";
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";

const scrollElement = ref<HTMLElement | null>(null);
</script>

<template>
  <div ref="scrollElement" class="scroll-area">
    <p v-for="index in 18" :key="index">第 {{ index }} 段内容：在此容器内滚动，超过阈值后显示回到顶部按钮。</p>
  </div>
  <AppBackToTop :target="scrollElement" :threshold="120" />
</template>

<style scoped>
.scroll-area { height: 180px; overflow: auto; padding: 0 16px; border: 1px solid var(--aps-line-soft); border-radius: 12px; color: var(--aps-muted); line-height: 1.8; }
.scroll-area p { margin: 12px 0; }
</style>
