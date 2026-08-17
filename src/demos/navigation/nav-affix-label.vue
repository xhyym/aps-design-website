<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 8" :key="i">为辅助技术提供更具语义的区域名称。</p>
    <AppAffix :offset="12" aria-label="订单操作栏">
      <div class="bar"><AppButton size="small">新建</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; }
.bar { padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
