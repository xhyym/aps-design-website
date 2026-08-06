<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "工单", data: [27, 39, 54, 46] }];
</script>

<template><AppBarChartCard title="本周工单" description="按来源汇总" :series="series" :categories="['Web', 'App', '小程序', '电话']" /></template>
