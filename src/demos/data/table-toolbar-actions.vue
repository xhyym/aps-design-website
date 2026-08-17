<script setup lang="ts">
import { AppButton, AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppTableToolbar :selected-count="0">
    <AppButton size="small">新增</AppButton>
    <AppButton size="small">导入</AppButton>
    <template #actions>
      <AppButton size="small" variant="text">导出</AppButton>
    </template>
  </AppTableToolbar>
</template>
