<script setup lang="ts">
import { AppRingChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "完成度", data: [74] }];
</script>

<template>
  <AppRingChart :series="series" :categories="['完成度']" :tooltip="false" />
</template>
