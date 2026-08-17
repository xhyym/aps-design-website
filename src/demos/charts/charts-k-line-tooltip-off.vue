<script setup lang="ts">
import { AppKLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "演示", data: [18, 22, 20, 24, 21] }];
</script>

<template>
  <AppKLineChart :series="series" :categories="['A', 'B', 'C', 'D', 'E']" :tooltip="false" />
</template>
