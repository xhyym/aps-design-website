<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "待处理", data: [30] },
  { name: "进行中", data: [45] },
  { name: "已完成", data: [120] },
];
</script>

<template>
  <AppDonutChart :series="series" :categories="['待处理', '进行中', '已完成']" :colors="['#f0a020', '#3d8bfd', '#3fae66']" />
</template>
