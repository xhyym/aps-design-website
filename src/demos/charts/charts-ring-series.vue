<script setup lang="ts">
import { AppRingChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "使用中", data: [68] },
  { name: "空闲", data: [32] },
];
</script>

<template>
  <AppRingChart :series="series" :categories="['使用中', '空闲']" />
</template>
