<script setup lang="ts">
import { AppButton, AppResultPage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResultPage status="error" title="导入失败" description="第 8 行手机号格式不正确，请修正后再次导入。">
    <template #actions><AppButton>返回修改文件</AppButton></template>
  </AppResultPage>
</template>
