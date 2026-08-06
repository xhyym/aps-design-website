<script setup lang="ts">
import { AppDivider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-actions">
    <span>已保存</span>
    <AppDivider direction="vertical" border-style="dotted" />
    <button type="button">查看历史</button>
  </div>
</template>

<style scoped>
.demo-actions { display: inline-flex; align-items: center; gap: 12px; color: var(--aps-muted); }
.demo-actions button { padding: 0; border: 0; background: transparent; color: var(--aps-blue); font: inherit; }
</style>
