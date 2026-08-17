<script setup lang="ts">
import { AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "已售", data: [560] },
  { name: "在售", data: [240] },
];
</script>

<template>
  <AppDonutChartCard title="库存结构" description="已售与在售占比" :series="series" :categories="['已售', '在售']" />
</template>
