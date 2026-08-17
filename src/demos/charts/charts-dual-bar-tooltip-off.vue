<script setup lang="ts">
import { AppDualBarCompareChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "线上", data: [60, 75, 88] },
  { name: "线下", data: [40, 52, 61] },
];
</script>

<template>
  <AppDualBarCompareChart :series="series" :categories="['华东', '华南', '华北']" :tooltip="false" />
</template>
