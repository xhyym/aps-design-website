<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "工单数量", data: [32, 49, 67, 84] }];
</script>

<template><AppHBarChart :series="series" :categories="['账户问题', '订单问题', '权限问题', '产品建议']" /></template>
