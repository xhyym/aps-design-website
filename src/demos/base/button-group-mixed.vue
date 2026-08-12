<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="提交与辅助操作">
    <AppButton variant="primary">提交审批</AppButton>
    <AppButton variant="secondary">存草稿</AppButton>
    <AppButton variant="text">取消</AppButton>
  </AppButtonGroup>
</template>
