<script setup lang="ts">
import { AppRingChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "进度", data: [56] }];
</script>

<template>
  <AppRingChart :series="series" :categories="['项目进度']" exportable />
</template>
