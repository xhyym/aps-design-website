<script setup lang="ts">
import { AppButton, AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "风险等级", data: [12, 63, 25] }];
</script>

<template>
  <AppDonutChartCard title="风险分布" :series="series" :categories="['高', '中', '低']" :colors="['#d55b5b', '#d08a27', '#35a16b']">
    <template #actions><AppButton size="small" variant="text">处理风险</AppButton></template>
  </AppDonutChartCard>
</template>
