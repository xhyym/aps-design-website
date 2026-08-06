<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "本周", data: [28, 42, 38] },
  { name: "上周", data: [34, 36, 31] },
];
</script>

<template><AppHBarChart :series="series" :categories="['企业版', '专业版', '基础版']" /></template>
