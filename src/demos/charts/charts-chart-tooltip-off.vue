<script setup lang="ts">
import { AppChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "温度", data: [22, 25, 28, 26, 24] }];
</script>

<template>
  <AppChart type="line" :series="series" :categories="['08:00', '10:00', '12:00', '14:00', '16:00']" :tooltip="false" />
</template>
