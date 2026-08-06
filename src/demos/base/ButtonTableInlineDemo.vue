<script setup lang="ts">
import { AppButton, AppButtonTable } from "aps-design-pro";
import "aps-design-pro/style.css";

/** 示例仅展示直接操作区，真实业务事件由页面处理。 */
function openOrderDetail(): void {
  console.info("已触发表格行内的查看订单操作");
}
</script>

<template>
  <AppButtonTable>
    <AppButton size="small" variant="text" @click="openOrderDetail">查看详情</AppButton>
    <AppButton size="small" variant="text">打印</AppButton>
  </AppButtonTable>
</template>
