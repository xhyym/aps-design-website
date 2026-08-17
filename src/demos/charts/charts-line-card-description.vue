<script setup lang="ts">
import { AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "在线人数", data: [320, 410, 380, 520, 480] }];
</script>

<template>
  <AppLineChartCard title="实时在线" description="最近五小时在线人数" :series="series" :categories="['14:00', '15:00', '16:00', '17:00', '18:00']" />
</template>
