<script setup lang="ts">
import { AppContainerHeader } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerHeader>
    <div class="bar">
      <strong>商品管理</strong>
      <span class="muted">共 320 件</span>
    </div>
  </AppContainerHeader>
</template>

<style scoped>
.bar { display: flex; gap: 12px; align-items: center; }
.muted { color: var(--aps-muted); font-size: 13px; }
</style>
