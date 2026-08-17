<script setup lang="ts">
import { AppProgressCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppProgressCard title="缓存预热" :percentage="82" description="已预热 82% 的节点" />
    <AppProgressCard title="日志归档" :percentage="50" description="正在压缩历史日志" status="warning" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; flex-wrap: wrap; }
</style>
