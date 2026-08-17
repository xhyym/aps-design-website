<script setup lang="ts">
import { AppLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "延迟", data: [120, 150, 110, 180, 160, 200, 190, 230, 210, 250, 240, 280] }];
const cats = Array.from({ length: 12 }, (_, i) => (i + 1) + "点");
</script>

<template>
  <AppLineChart :series="series" :categories="cats" zoomable />
</template>
