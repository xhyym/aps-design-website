<script setup lang="ts">
import { AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "收入", data: [32, 44, 51, 65, 73, 88] }];
</script>

<template><AppLineChartCard title="月度收入" :series="series" :categories="['1月', '2月', '3月', '4月', '5月', '6月']" exportable export-file-name="月度收入" /></template>
