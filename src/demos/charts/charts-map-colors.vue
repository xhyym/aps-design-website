<script setup lang="ts">
import { AppMapChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "覆盖度", data: [62, 45, 78, 54] }];
</script>

<template>
  <AppMapChart :series="series" :categories="['东部', '南部', '西部', '北部']" :colors="['#3fae66']" />
</template>
