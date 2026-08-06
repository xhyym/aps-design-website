<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "已完成", data: [72], color: "#35a16b" },
  { name: "进行中", data: [18], color: "#0071e3" },
  { name: "风险", data: [10], color: "#d08a27" },
];
</script>

<template><AppDonutChart :series="series" aria-label="项目状态占比" /></template>
