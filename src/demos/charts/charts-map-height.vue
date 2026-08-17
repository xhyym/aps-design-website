<script setup lang="ts">
import { AppMapChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "客流量", data: [45, 68, 32, 57] }];
</script>

<template>
  <AppMapChart :series="series" :categories="['南站', '东站', '西站', '北站']" :height="300" />
</template>
