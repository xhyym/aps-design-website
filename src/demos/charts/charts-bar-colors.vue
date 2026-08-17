<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "本月", data: [86, 122, 98, 146, 168] },
  { name: "上月", data: [70, 98, 110, 120, 130] },
];
</script>

<template>
  <AppBarChart :series="series" :categories="['华东', '华南', '华北', '西南', '西北']" :colors="['#e65c41', '#3d8bfd']" />
</template>
