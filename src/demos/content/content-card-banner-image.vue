<script setup lang="ts">
import { AppButton, AppCardBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCardBanner title="暑期课程计划" description="为团队安排一套可持续的前端进阶训练。" image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80">
    <template #actions><AppButton size="small">查看课程</AppButton></template>
  </AppCardBanner>
</template>
