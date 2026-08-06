<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="[16, 16]" class="demo-row">
    <AppCol :span="12"><div>12 / 24</div></AppCol>
    <AppCol :span="12"><div>12 / 24</div></AppCol>
    <AppCol :span="8"><div>8 / 24</div></AppCol>
    <AppCol :span="16"><div>16 / 24</div></AppCol>
  </AppRow>
</template>

<style scoped>
.demo-row { width: min(100%, 560px); }
.demo-row :deep(.app-col) div { padding: 12px; border-radius: 8px; background: var(--aps-blue-soft); color: var(--aps-blue); text-align: center; }
</style>
