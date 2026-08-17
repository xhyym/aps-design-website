<script setup lang="ts">
import { ref } from "vue";
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const box = ref<HTMLElement | null>(null);
</script>

<template>
  <div ref="box" class="scroll-box">
    <p v-for="i in 12" :key="i">容器内的第 {{ i }} 段内容。</p>
    <AppAffix :target="box" :offset="8">
      <div class="bar"><AppButton size="small">容器内操作</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.scroll-box { height: 220px; overflow: auto; border: 1px solid var(--aps-line-soft); border-radius: 10px; padding: 12px; color: var(--aps-muted); }
.bar { padding: 8px; background: var(--aps-surface); border-radius: 8px; }
</style>
