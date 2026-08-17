<script setup lang="ts">
import { AppHBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "满意度", data: [92, 85, 78, 95] }];
</script>

<template>
  <AppHBarChart :series="series" :categories="['客服', '物流', '售后', '产品']" :colors="['#3fae66']" />
</template>
