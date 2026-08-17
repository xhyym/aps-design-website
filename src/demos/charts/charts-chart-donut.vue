<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "直接访问", data: [480] },
  { name: "搜索引擎", data: [320] },
  { name: "社交媒体", data: [200] },
];
</script>

<template>
  <AppChart type="donut" :series="series" :categories="['直接访问', '搜索引擎', '社交媒体']" />
</template>
