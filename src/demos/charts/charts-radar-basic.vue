<script setup lang="ts">
import { AppRadarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "当前版本", data: [86, 72, 90, 65, 78] }];
</script>

<template><AppRadarChart :series="series" :categories="['性能', '稳定性', '易用性', '覆盖率', '文档']" /></template>
