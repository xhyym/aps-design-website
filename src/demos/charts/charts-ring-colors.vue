<script setup lang="ts">
import { AppRingChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "发布进度", data: [64, 36] }];
</script>

<template><AppRingChart :series="series" :categories="['已发布', '待发布']" :colors="['#a56de2', '#d2d2d7']" /></template>
