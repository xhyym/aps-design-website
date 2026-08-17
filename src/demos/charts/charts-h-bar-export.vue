<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "耗时（天）", data: [12, 9, 16, 8] }];
</script>

<template>
  <AppHBarChart :series="series" :categories="['需求评审', '开发', '测试', '上线']" exportable />
</template>
