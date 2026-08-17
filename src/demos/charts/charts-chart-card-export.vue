<script setup lang="ts">
import { AppChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "留存率", data: [92, 88, 85, 80] }];
</script>

<template>
  <AppChartCard title="用户留存" type="line" :series="series" :categories="['D1', 'D7', 'D14', 'D30']" exportable />
</template>
