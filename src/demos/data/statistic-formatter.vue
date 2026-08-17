<script setup lang="ts">
import { AppStatistic } from "aps-design-pro";
import "aps-design-pro/style.css";

const formatter = (value: string | number) => "约 " + Math.round(Number(value) / 10000) + " 万";
</script>

<template>
  <AppStatistic label="累计用户" :value="1286000" :formatter="formatter" />
</template>
