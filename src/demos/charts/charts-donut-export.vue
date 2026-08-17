<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "渠道 A", data: [260] },
  { name: "渠道 B", data: [190] },
  { name: "渠道 C", data: [140] },
];
</script>

<template>
  <AppDonutChart :series="series" :categories="['渠道 A', '渠道 B', '渠道 C']" exportable export-file-name="渠道构成.svg" />
</template>
