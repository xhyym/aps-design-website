<script setup lang="ts">
import { AppButton, AppHeaderBar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppHeaderBar title="客户管理" subtitle="共 128 位客户" class="demo-header">
    <AppButton size="small" variant="secondary">导出</AppButton>
    <AppButton size="small">新增客户</AppButton>
  </AppHeaderBar>
</template>

<style scoped>
.demo-header { width: min(100%, 560px); border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
