<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "活跃用户", data: [1500, 1800, 1700, 2100, 2400] }];
</script>

<template>
  <AppChart type="line" :series="series" :categories="['周一', '周二', '周三', '周四', '周五']" exportable export-file-name="活跃用户.svg" />
</template>
