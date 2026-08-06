<script setup lang="ts">
import { AppLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "访客数", data: [120, 178, 156, 210, 266, 298] }];
</script>

<template><AppLineChart :series="series" :categories="['1月', '2月', '3月', '4月', '5月', '6月']" /></template>
