<script setup lang="ts">
import { AppChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "浏览量", data: [300, 420, 380, 560] }];
</script>

<template>
  <AppChartCard title="流量趋势" description="近四天页面浏览量" type="line" :series="series" :categories="['08-14', '08-15', '08-16', '08-17']" />
</template>
