<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatusTag tone="info" label="处理中" />
    <AppStatusTag tone="success" label="已完成" />
    <AppStatusTag tone="warning" label="有风险" />
    <AppStatusTag tone="danger" label="已失败" />
    <AppStatusTag tone="neutral" label="未开始" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
