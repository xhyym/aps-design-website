<script setup lang="ts">
import { AppRingChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "完成率", data: [78, 22] }];
</script>

<template><AppRingChart :series="series" :categories="['已完成', '未完成']" /></template>
