<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "订单量", data: [58, 96, 74, 120] }];
</script>

<template>
  <AppBarChartCard title="订单量统计" :series="series" :categories="['Q1', 'Q2', 'Q3', 'Q4']" exportable export-file-name="订单量.svg" />
</template>
