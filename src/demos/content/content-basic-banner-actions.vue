<script setup lang="ts">
import { AppBasicBanner, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBasicBanner title="新版本可用" description="v0.3.1 已发布，包含多项修复">
    <template #actions>
      <AppButton size="small" variant="text">查看更新日志</AppButton>
    </template>
  </AppBasicBanner>
</template>
