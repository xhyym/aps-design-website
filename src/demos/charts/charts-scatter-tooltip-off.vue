<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "分布", data: [5, 9, 14, 7, 12, 16, 10] }];
</script>

<template>
  <AppScatterChart :series="series" :categories="['A', 'B', 'C', 'D', 'E', 'F', 'G']" :tooltip="false" />
</template>
