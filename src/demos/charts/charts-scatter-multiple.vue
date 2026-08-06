<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "新用户", data: [22, 38, 44, 62, 78] },
  { name: "老用户", data: [30, 34, 52, 48, 71] },
];
</script>

<template><AppScatterChart :series="series" :categories="['渠道一', '渠道二', '渠道三', '渠道四', '渠道五']" /></template>
