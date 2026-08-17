<script setup lang="ts">
import { AppDualBarCompareChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "预算", data: [50, 60, 70, 80] },
  { name: "支出", data: [45, 58, 66, 77] },
];
</script>

<template>
  <AppDualBarCompareChart :series="series" :categories="['1月', '2月', '3月', '4月']" :height="300" />
</template>
