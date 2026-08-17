<script setup lang="ts">
import { AppLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "温度", data: [22, 25, 24, 27, 26] }];
</script>

<template>
  <AppLineChart :series="series" :categories="['10时', '12时', '14时', '16时', '18时']" :tooltip="false" />
</template>
