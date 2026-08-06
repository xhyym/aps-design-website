<script setup lang="ts">
import { AppBasicBanner, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBasicBanner title="工作区即将升级" description="升级期间历史订单仍可正常查看。" icon="warning" tone="blue">
    <template #actions><AppButton size="small" variant="secondary">查看安排</AppButton></template>
  </AppBasicBanner>
</template>
