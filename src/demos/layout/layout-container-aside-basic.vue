<script setup lang="ts">
import { AppContainerAside } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerAside bordered class="demo-aside">
    <strong>订单中心</strong>
    <span>全部订单</span>
    <span>售后服务</span>
  </AppContainerAside>
</template>

<style scoped>
.demo-aside { min-height: 150px; gap: 12px; padding: 18px; }
</style>
