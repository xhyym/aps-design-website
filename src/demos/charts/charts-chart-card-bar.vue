<script setup lang="ts">
import { AppChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "线上", data: [88, 120, 96] },
  { name: "线下", data: [60, 75, 90] },
];
</script>

<template>
  <AppChartCard title="渠道对比" type="bar" :series="series" :categories="['华东', '华南', '华北']" />
</template>
