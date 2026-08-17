<script setup lang="ts">
import { AppButton, AppCardBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCardBanner title="邀请有礼" description="邀请好友注册，双方均可获得优惠券">
    <template #actions>
      <AppButton size="small">立即邀请</AppButton>
    </template>
  </AppCardBanner>
</template>
