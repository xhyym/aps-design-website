<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const end = new Date(Date.now() + 1000 * 60 * 2).toISOString();
</script>

<template>
  <AppCountdown :value="end">
    <template #default="{ displayValue }">
      <span class="big">{{ displayValue }}</span>
      <small>分钟前下单可享优惠</small>
    </template>
  </AppCountdown>
</template>

<style scoped>
.big { font-size: 24px; font-weight: 600; margin-right: 8px; }
</style>
