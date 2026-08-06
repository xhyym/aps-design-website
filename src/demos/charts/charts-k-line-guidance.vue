<script setup lang="ts">
import { AppKLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "演示数据", data: [21, 19, 24, 22, 25] }];
</script>

<template><AppKLineChart :series="series" empty-text="当前版本尚未接入 OHLC 数据适配器。" aria-label="K 线图能力说明" /></template>
