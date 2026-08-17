<script setup lang="ts">
import { AppBasicBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppBasicBanner title="系统升级通知" description="今晚 23:00 进行例行维护" tone="blue" />
    <AppBasicBanner title="活动开始" description="限时折扣已开启" tone="green" />
    <AppBasicBanner title="配置提醒" description="部分接口参数即将调整" tone="orange" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
