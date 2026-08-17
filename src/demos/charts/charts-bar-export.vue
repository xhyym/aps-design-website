<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "访问量", data: [320, 480, 410, 560, 620] }];
</script>

<template>
  <AppBarChart :series="series" :categories="['周一', '周二', '周三', '周四', '周五']" exportable export-file-name="访问量柱状图.svg" />
</template>
