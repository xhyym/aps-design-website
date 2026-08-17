<script setup lang="ts">
import { AppDualBarCompareChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "目标", data: [100, 100, 100, 100] },
  { name: "实际", data: [82, 96, 91, 108] },
];
</script>

<template>
  <AppDualBarCompareChart :series="series" :categories="['Q1', 'Q2', 'Q3', 'Q4']" exportable />
</template>
