<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "实际", data: [34, 46, 52, 61] },
  { name: "目标", data: [40, 44, 50, 58] },
];
</script>

<template><AppBarChart :series="series" :categories="['一季度', '二季度', '三季度', '四季度']" :colors="['#0071e3', '#35a16b']" /></template>
