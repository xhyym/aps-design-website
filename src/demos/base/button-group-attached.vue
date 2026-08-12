<script setup lang="ts">
import { AppButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup :attached="false" aria-label="导入流程">
    <AppButton variant="secondary">下载模板</AppButton>
    <AppButton variant="secondary">选择文件</AppButton>
    <AppButton variant="secondary">开始导入</AppButton>
  </AppButtonGroup>
</template>
