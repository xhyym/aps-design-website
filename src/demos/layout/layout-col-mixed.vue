<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="12">
    <AppCol :span="16"><div class="cell main">主内容区 16</div></AppCol>
    <AppCol :span="8" :offset="0"><div class="cell side">侧栏 8</div></AppCol>
    <AppCol :span="12" :offset="6"><div class="cell">偏移 6 的 12 列</div></AppCol>
  </AppRow>
</template>

<style scoped>
.cell { background: var(--aps-fill); border-radius: 4px; text-align: center; padding: 12px 0; margin-bottom: 8px; }
.main { background: var(--aps-fill-strong); }
.side { background: var(--aps-fill); }
</style>
