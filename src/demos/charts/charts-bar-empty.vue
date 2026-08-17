<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [];
</script>

<template>
  <AppBarChart :series="series" empty-text="暂无销售数据" />
</template>
