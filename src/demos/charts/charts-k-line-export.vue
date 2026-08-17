<script setup lang="ts">
import { AppKLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "示例行情", data: [30, 29, 31, 32, 30] }];
</script>

<template>
  <AppKLineChart :series="series" :categories="['M1', 'M2', 'M3', 'M4', 'M5']" exportable />
</template>
