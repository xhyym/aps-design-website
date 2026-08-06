<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const categories = Array.from({ length: 18 }, (_, index) => `第 ${index + 1} 天`);
const series: ChartSeries[] = [{ name: "订单金额", data: [12, 18, 15, 26, 32, 30, 43, 37, 51, 48, 59, 63, 54, 68, 72, 66, 79, 84] }];
</script>

<template><AppChart type="line" :series="series" :categories="categories" zoomable exportable export-file-name="订单趋势" /></template>
