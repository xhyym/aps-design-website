<script setup lang="ts">
import { AppRadarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "能力模型", data: [88, 76, 92, 81, 70] }];
</script>

<template>
  <AppRadarChart :series="series" :categories="['沟通', '协作', '执行', '创新', '学习']" exportable />
</template>
