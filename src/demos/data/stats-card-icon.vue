<script setup lang="ts">
import { AppStatsCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatsCard title="订单数" :value="8600" icon="chart" tone="info" />
    <AppStatsCard title="商品数" :value="320" icon="grid" tone="neutral" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; flex-wrap: wrap; }
</style>
