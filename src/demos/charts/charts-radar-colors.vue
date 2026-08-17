<script setup lang="ts">
import { AppRadarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "产品 A", data: [80, 65, 90, 75, 60, 85] },
  { name: "产品 B", data: [70, 85, 60, 90, 75, 65] },
];
</script>

<template>
  <AppRadarChart :series="series" :categories="['性能', '易用', '外观', '价格', '服务', '生态']" :colors="['#3d8bfd', '#e65c41']" />
</template>
