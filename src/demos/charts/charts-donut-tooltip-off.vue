<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "成功", data: [92] },
  { name: "失败", data: [8] },
];
</script>

<template>
  <AppDonutChart :series="series" :categories="['成功', '失败']" :tooltip="false" />
</template>
