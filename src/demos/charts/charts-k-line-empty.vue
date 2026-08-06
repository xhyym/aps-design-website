<script setup lang="ts">
import { AppKLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "收盘价", data: [12.8, 13.2, 12.7, 14.1] }];
</script>

<template><AppKLineChart :series="series" :categories="['09:30', '10:30', '13:00', '14:30']" /></template>
