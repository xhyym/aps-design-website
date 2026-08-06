<script setup lang="ts">
import { AppDualBarCompareChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const categories = Array.from({ length: 14 }, (_, index) => `${index + 1}日`);
const series: ChartSeries[] = [
  { name: "实际", data: [23, 26, 31, 28, 35, 39, 41, 37, 45, 49, 51, 55, 58, 63] },
  { name: "预算", data: [25, 25, 28, 30, 32, 34, 39, 42, 44, 46, 48, 50, 53, 56] },
];
</script>

<template><AppDualBarCompareChart :series="series" :categories="categories" zoomable :min-visible-points="4" /></template>
