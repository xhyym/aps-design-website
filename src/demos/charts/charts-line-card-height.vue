<script setup lang="ts">
import { AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "请求量", data: [1200, 1800, 1600, 2400, 2100] }];
</script>

<template>
  <AppLineChartCard title="请求量监控" :series="series" :categories="['08:00', '10:00', '12:00', '14:00', '16:00']" :height="300" />
</template>
