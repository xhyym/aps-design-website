<script setup lang="ts">
import { AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "完成率", data: [68, 72, 79, 83, 91] }];
</script>

<template><AppLineChartCard title="迭代完成率" description="当前冲刺周期" :series="series" :categories="['第 1 周', '第 2 周', '第 3 周', '第 4 周', '第 5 周']" /></template>
