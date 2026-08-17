<script setup lang="ts">
import { AppButton, AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "收入", data: [88, 96, 92, 104, 118] }];
</script>

<template>
  <AppLineChartCard title="收入趋势" :series="series" :categories="['1月', '2月', '3月', '4月', '5月']">
    <template #actions>
      <AppButton size="small" variant="text">查看明细</AppButton>
    </template>
  </AppLineChartCard>
</template>
