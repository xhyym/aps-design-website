<script setup lang="ts">
import { AppScrollbar } from "aps-design-pro";
import "aps-design-pro/style.css";

const columns = ["订单号", "客户名称", "支付状态", "发货状态", "售后状态", "更新时间"];
</script>

<template>
  <AppScrollbar horizontal class="demo-scrollbar">
    <span v-for="column in columns" :key="column">{{ column }}</span>
  </AppScrollbar>
</template>

<style scoped>
.demo-scrollbar { width: min(100%, 480px); padding-bottom: 8px; }
.demo-scrollbar span { display: inline-block; min-width: 116px; padding: 10px 14px; border: 1px solid var(--aps-line-soft); border-right: 0; background: var(--aps-surface-soft); text-align: center; }
.demo-scrollbar span:last-child { border-right: 1px solid var(--aps-line-soft); }
</style>
