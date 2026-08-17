<script setup lang="ts">
import { AppRingChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "达标率", data: [92] }];
</script>

<template>
  <AppRingChart :series="series" :categories="['达标率']" :height="280" />
</template>
