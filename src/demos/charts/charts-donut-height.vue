<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "男", data: [540] },
  { name: "女", data: [460] },
];
</script>

<template>
  <AppDonutChart :series="series" :categories="['男', '女']" :height="300" />
</template>
