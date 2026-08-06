<script setup lang="ts">
import { AppMapChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "访问量", data: [126, 87, 63] }];
</script>

<template><AppMapChart :series="series" :categories="['上海', '北京', '广州']" /></template>
