<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "新增用户", data: [32, 48, 39, 66, 72, 88] }];
const categories = ["周一", "周二", "周三", "周四", "周五", "周六"];
</script>

<template><AppChart type="line" :series="series" :categories="categories" aria-label="近六日新增用户" /></template>
