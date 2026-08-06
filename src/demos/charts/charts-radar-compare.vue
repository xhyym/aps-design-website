<script setup lang="ts">
import { AppRadarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "团队 A", data: [84, 72, 91, 67, 75] },
  { name: "团队 B", data: [70, 88, 76, 82, 69] },
];
</script>

<template><AppRadarChart :series="series" :categories="['协作', '质量', '交付', '效率', '复盘']" /></template>
