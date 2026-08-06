<script setup lang="ts">
import { AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "来源", data: [44, 33, 23] }];
</script>

<template><AppDonutChartCard title="用户来源" description="本月新注册用户" :series="series" :categories="['自然流量', '合作渠道', '广告投放']" /></template>
