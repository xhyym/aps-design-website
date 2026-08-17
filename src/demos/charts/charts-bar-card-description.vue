<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "成交额", data: [120, 200, 150, 260] }];
</script>

<template>
  <AppBarChartCard title="成交趋势" description="近四周成交金额（万元）" :series="series" :categories="['第1周', '第2周', '第3周', '第4周']" />
</template>
