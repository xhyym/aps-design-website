<script setup lang="ts">
import { AppLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "转化率", data: [3.2, 3.8, 4.1, 3.9, 4.6] }];
</script>

<template>
  <AppLineChart :series="series" :categories="['W1', 'W2', 'W3', 'W4', 'W5']" exportable export-file-name="转化率.svg" />
</template>
