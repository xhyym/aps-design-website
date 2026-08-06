<script setup lang="ts">
import { AppMapChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "门店数", data: [18, 24, 15] }];
</script>

<template><AppMapChart :series="series" empty-text="请先在业务层注册可用地图数据。" aria-label="地图图表能力说明" /></template>
