<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="16" class="demo-row">
    <AppCol :span="8" :offset="4"><div>居中 8 列</div></AppCol>
    <AppCol :span="6" :offset="2"><div>偏移 2 列</div></AppCol>
  </AppRow>
</template>

<style scoped>
.demo-row { width: min(100%, 560px); }
.demo-row :deep(.app-col) div { padding: 14px; border-radius: 8px; background: var(--aps-surface-soft); color: var(--aps-muted); text-align: center; }
</style>
