<script setup lang="ts">
import { AppRadarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "综合评分", data: [72, 68, 85, 90, 78] }];
</script>

<template>
  <AppRadarChart :series="series" :categories="['维度一', '维度二', '维度三', '维度四', '维度五']" :tooltip="false" />
</template>
