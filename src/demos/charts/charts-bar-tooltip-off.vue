<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "销量", data: [44, 72, 58, 90, 66] }];
</script>

<template>
  <AppBarChart :series="series" :categories="['A', 'B', 'C', 'D', 'E']" :tooltip="false" />
</template>
