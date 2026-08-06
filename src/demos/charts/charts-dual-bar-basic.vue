<script setup lang="ts">
import { AppDualBarCompareChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "本月", data: [126, 162, 148, 193] },
  { name: "上月", data: [108, 141, 157, 169] },
];
</script>

<template><AppDualBarCompareChart :series="series" :categories="['第一周', '第二周', '第三周', '第四周']" /></template>
