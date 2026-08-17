<script setup lang="ts">
import { ref } from "vue";
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";

const box = ref<HTMLElement | null>(null);
</script>

<template>
  <div ref="box" class="scroll-box">
    <p v-for="i in 16" :key="i">容器内的长内容，按钮只监听该容器。</p>
    <AppBackToTop :target="box" />
  </div>
</template>

<style scoped>
.scroll-box { height: 240px; overflow: auto; border: 1px solid var(--aps-line-soft); border-radius: 10px; padding: 12px; color: var(--aps-muted); }
</style>
