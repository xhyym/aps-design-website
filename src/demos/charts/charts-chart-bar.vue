<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "销售额", data: [720, 900, 860, 1100] }];
</script>

<template>
  <AppChart type="bar" :series="series" :categories="['一月', '二月', '三月', '四月']" />
</template>
