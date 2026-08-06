<script setup lang="ts">
import { AppChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "注册量", data: [46, 62, 58, 79, 94] }];
</script>

<template><AppChartCard title="新增注册" description="近五日统计" :series="series" :categories="['周一', '周二', '周三', '周四', '周五']" /></template>
