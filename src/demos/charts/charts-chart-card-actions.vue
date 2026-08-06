<script setup lang="ts">
import { AppButton, AppChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "访问量", data: [92, 118, 136, 127, 154] }];
</script>

<template>
  <AppChartCard title="站点访问" description="按日汇总" :series="series" :categories="['周一', '周二', '周三', '周四', '周五']">
    <template #actions><AppButton size="small" variant="text">查看报表</AppButton></template>
  </AppChartCard>
</template>
