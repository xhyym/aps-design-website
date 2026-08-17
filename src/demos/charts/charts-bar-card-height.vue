<script setup lang="ts">
import { AppBarChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "人数", data: [320, 280, 410, 390] }];
</script>

<template>
  <AppBarChartCard title="参会人数" :series="series" :categories="['上海', '北京', '深圳', '杭州']" :height="320" />
</template>
