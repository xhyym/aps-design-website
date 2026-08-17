<script setup lang="ts">
import { AppMapChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "门店数", data: [18, 24, 15, 32] }];
</script>

<template>
  <AppMapChart :series="series" :categories="['华东', '华南', '华北', '西南']" />
</template>
