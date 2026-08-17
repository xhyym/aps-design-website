<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "库存", data: [320, 210, 450, 180] }];
</script>

<template>
  <AppHBarChart :series="series" :categories="['华东仓', '华南仓', '华北仓', '西南仓']" :height="300" />
</template>
