<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "实验组", data: [18, 36, 29, 58, 47, 71] }];
</script>

<template><AppScatterChart :series="series" :categories="['A', 'B', 'C', 'D', 'E', 'F']" /></template>
