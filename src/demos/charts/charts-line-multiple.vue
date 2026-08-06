<script setup lang="ts">
import { AppLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "本期", data: [52, 61, 73, 68, 84] },
  { name: "上期", data: [44, 58, 59, 72, 76] },
];
</script>

<template><AppLineChart :series="series" :categories="['周一', '周二', '周三', '周四', '周五']" :colors="['#0071e3', '#a56de2']" /></template>
