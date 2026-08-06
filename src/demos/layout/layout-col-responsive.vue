<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="16" class="demo-row">
    <AppCol :xs="24" :sm="12" :lg="8"><div>响应列 A</div></AppCol>
    <AppCol :xs="24" :sm="12" :lg="8"><div>响应列 B</div></AppCol>
    <AppCol :xs="24" :sm="24" :lg="8"><div>响应列 C</div></AppCol>
  </AppRow>
</template>

<style scoped>
.demo-row { width: min(100%, 560px); }
.demo-row :deep(.app-col) div { padding: 14px; border-radius: 8px; background: var(--aps-blue-soft); color: var(--aps-blue); text-align: center; }
</style>
