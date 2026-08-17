<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 10" :key="i">禁用后操作条随文档正常流动，不再吸顶。</p>
    <AppAffix :disabled="true">
      <div class="bar"><AppButton size="small">已禁用吸顶</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; }
.bar { padding: 10px 12px; border: 1px dashed var(--aps-line); border-radius: 10px; color: var(--aps-ink); }
</style>
