<script setup lang="ts">
import { AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppCard header="常显阴影" shadow="always"><p>内容</p></AppCard>
    <AppCard header="悬停阴影" shadow="hover"><p>鼠标移入查看</p></AppCard>
    <AppCard header="无阴影" shadow="never"><p>内容</p></AppCard>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; }
.row :deep(.aps-card) { width: 200px; }
</style>
