<script setup lang="ts">
import { AppKLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "日 K 数据", data: [21, 19, 24, 22, 25, 23, 27, 26, 24, 28] }];
</script>

<template>
  <AppKLineChart :series="series" :categories="['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10']" />
</template>
