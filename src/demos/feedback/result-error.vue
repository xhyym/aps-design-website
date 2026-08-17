<script setup lang="ts">
import { AppResult } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResult status="error" title="支付失败" description="余额不足或卡片被拒绝" action-text="重新支付" />
</template>
