<script setup lang="ts">
import { AppBadge, AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBadge :value="128" :max="99" tone="blue" aria-label="通知中心未读消息超过 99 条">
    <AppIconButton icon="bell" label="查看通知中心" variant="secondary" />
  </AppBadge>
</template>
