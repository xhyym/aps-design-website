<script setup lang="ts">
import { AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "PC", data: [420] },
  { name: "移动端", data: [680] },
];
</script>

<template>
  <AppDonutChartCard title="访问设备" :series="series" :categories="['PC', '移动端']" exportable />
</template>
