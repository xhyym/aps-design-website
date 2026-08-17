<script setup lang="ts">
import { AppRadarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "满意度", data: [84, 79, 91, 86, 88] }];
</script>

<template>
  <AppRadarChart :series="series" :categories="['质量', '速度', '态度', '专业', '响应']" :height="300" />
</template>
