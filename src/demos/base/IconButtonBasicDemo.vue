<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";

function refreshOrders(): void {
  console.info("正在刷新订单列表");
}
</script>

<template>
  <AppIconButton
    icon="refresh"
    label="刷新订单列表"
    variant="secondary"
    @click="refreshOrders"
  />
</template>
