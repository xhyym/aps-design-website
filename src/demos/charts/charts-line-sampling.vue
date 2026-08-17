<script setup lang="ts">
import { AppLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "长序列", data: Array.from({ length: 60 }, (_, i) => 50 + Math.round(Math.sin(i / 5) * 20 + (i % 7) * 3)) }];
const cats = Array.from({ length: 60 }, (_, i) => String(i + 1));
</script>

<template>
  <AppLineChart :series="series" :categories="cats" sampling="none" />
</template>
