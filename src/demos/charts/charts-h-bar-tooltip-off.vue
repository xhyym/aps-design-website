<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "人数", data: [28, 42, 35, 51] }];
</script>

<template>
  <AppHBarChart :series="series" :categories="['前端', '后端', '测试', '设计']" :tooltip="false" />
</template>
