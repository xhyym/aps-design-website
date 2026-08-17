<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "样本 A", data: [12, 18, 15, 22, 19, 24] },
  { name: "样本 B", data: [8, 14, 11, 17, 13, 20] },
];
</script>

<template>
  <AppScatterChart :series="series" :categories="['P1', 'P2', 'P3', 'P4', 'P5', 'P6']" :colors="['#e65c41', '#3d8bfd']" />
</template>
