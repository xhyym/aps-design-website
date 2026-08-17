<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [];
</script>

<template>
  <AppChart type="line" :series="series" empty-text="当前筛选条件下没有数据" />
</template>
