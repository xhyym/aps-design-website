<script setup lang="ts">
import { AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "通过", data: [85] },
  { name: "驳回", data: [15] },
];
</script>

<template>
  <AppDonutChartCard title="审批结果" :series="series" :categories="['通过', '驳回']" :height="300" />
</template>
