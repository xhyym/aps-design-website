<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="课程批量操作">
    <AppButton variant="secondary">导出</AppButton>
    <AppButton variant="secondary">归档</AppButton>
    <AppButton variant="secondary">删除</AppButton>
  </AppButtonGroup>
</template>
