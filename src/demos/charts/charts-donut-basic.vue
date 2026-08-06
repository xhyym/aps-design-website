<script setup lang="ts">
import { AppDonutChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "渠道占比", data: [46, 31, 23] }];
</script>

<template><AppDonutChart :series="series" :categories="['自然流量', '广告投放', '合作伙伴']" /></template>
