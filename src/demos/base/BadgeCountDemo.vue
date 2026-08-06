<script setup lang="ts">
import { AppBadge, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBadge :value="8" aria-label="待处理订单 8 条">
    <AppButton variant="secondary">待处理订单</AppButton>
  </AppBadge>
</template>
