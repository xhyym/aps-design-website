<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "点位", data: [22, 19, 26, 24, 21, 28] }];
</script>

<template>
  <AppScatterChart :series="series" :categories="['X1', 'X2', 'X3', 'X4', 'X5', 'X6']" exportable />
</template>
