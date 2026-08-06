<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const categories = Array.from({ length: 12 }, (_, index) => `${index + 1}月`);
const series: ChartSeries[] = [{ name: "销售额", data: [32, 38, 44, 41, 53, 59, 62, 68, 65, 74, 82, 91] }];
</script>

<template><AppBarChartCard title="年度销售额" :series="series" :categories="categories" zoomable exportable /></template>
