<script setup lang="ts">
import { AppMapChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "网点", data: [28, 36, 21, 42] }];
</script>

<template>
  <AppMapChart :series="series" :categories="['A 区', 'B 区', 'C 区', 'D 区']" exportable />
</template>
