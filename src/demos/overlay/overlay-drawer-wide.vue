<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDrawer } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">打开详情面板</AppButton>
  <AppDrawer v-model="visible" title="订单详情" description="查看订单状态、收货信息和操作记录。" width="wide">
    <dl><dt>订单编号</dt><dd>SO-20260806-018</dd><dt>当前状态</dt><dd>待发货</dd></dl>
  </AppDrawer>
</template>
