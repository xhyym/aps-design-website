<script setup lang="ts">
import { AppDualBarCompareChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "今年", data: [420, 480, 530] },
  { name: "去年", data: [360, 410, 460] },
];
</script>

<template>
  <AppDualBarCompareChart :series="series" :categories="['一季度', '二季度', '三季度']" :colors="['#3fae66', '#c5cbd4']" />
</template>
