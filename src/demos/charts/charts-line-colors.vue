<script setup lang="ts">
import { AppLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "A 组", data: [40, 52, 48, 66, 72] },
  { name: "B 组", data: [30, 42, 56, 50, 60] },
];
</script>

<template>
  <AppLineChart :series="series" :categories="['周一', '周二', '周三', '周四', '周五']" :colors="['#e65c41', '#3d8bfd']" />
</template>
