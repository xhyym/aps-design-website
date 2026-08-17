<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "日活", data: [200, 240, 310, 280, 360, 420, 390, 450, 480, 520, 500, 610] }];
const cats = Array.from({ length: 12 }, (_, i) => (i + 1) + "月");
</script>

<template>
  <AppBarChart :series="series" :categories="cats" zoomable />
</template>
