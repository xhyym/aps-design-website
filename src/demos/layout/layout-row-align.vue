<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow align="middle" justify="space-between" :gutter="12" class="demo-row">
    <AppCol :span="8"><div class="short">顶部</div></AppCol>
    <AppCol :span="8"><div class="tall">居中</div></AppCol>
    <AppCol :span="8"><div class="short">底部</div></AppCol>
  </AppRow>
</template>

<style scoped>
.demo-row { width: min(100%, 560px); }
.demo-row :deep(.app-col) div { display: grid; place-items: center; border-radius: 8px; background: var(--aps-surface-soft); color: var(--aps-muted); }
.short { height: 40px; }
.tall { height: 82px; }
</style>
