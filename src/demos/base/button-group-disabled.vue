<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="带禁用成员的操作组">
    <AppButton variant="secondary">复制</AppButton>
    <AppButton variant="secondary" disabled>删除</AppButton>
  </AppButtonGroup>
</template>
