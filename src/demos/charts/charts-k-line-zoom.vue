<script setup lang="ts">
import { AppKLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "行情", data: [25, 28, 26, 30, 29, 32, 31, 28, 30, 33, 35, 34, 32, 36] }];
const cats = Array.from({ length: 14 }, (_, i) => "T" + (i + 1));
</script>

<template>
  <AppKLineChart :series="series" :categories="cats" zoomable />
</template>
