<script setup lang="ts">
import { AppStatistic } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatistic label="今日销售额" :value="48200" prefix="¥" />
    <AppStatistic label="订单增长率" :value="12.5" :precision="1" suffix="%" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 48px; }
</style>
