<script setup lang="ts">
import { AppButton, AppResultPage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResultPage status="success" title="订单已提交" description="我们会在 24 小时内处理">
    <template #actions>
      <AppButton size="small">查看订单</AppButton>
      <AppButton size="small" variant="text">返回首页</AppButton>
    </template>
  </AppResultPage>
</template>
