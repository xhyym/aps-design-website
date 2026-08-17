<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "采样", data: [31, 27, 34, 29, 36, 33, 30] }];
</script>

<template>
  <AppScatterChart :series="series" :categories="['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7']" :height="300" />
</template>
