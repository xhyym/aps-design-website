<script setup lang="ts">
import { AppButton, AppConfigProvider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppConfigProvider size="small" locale="zh-CN" :z-index="2400">
    <AppButton>保存课程</AppButton>
    <AppButton variant="secondary">预览</AppButton>
  </AppConfigProvider>
</template>
