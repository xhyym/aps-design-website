<script setup lang="ts">
import { AppButton, AppConfigProvider } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppConfigProvider size="small">
    <AppButton>保存课程</AppButton>
    <AppButton variant="secondary">预览</AppButton>
    <AppButton variant="text">取消</AppButton>
  </AppConfigProvider>
</template>
