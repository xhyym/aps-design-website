<script setup lang="ts">
import { ref } from "vue";
import { AppSegmented } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeView = ref("week");
const timeOptions = [
  { label: "日", value: "day" },
  { label: "周", value: "week" },
  { label: "月", value: "month", disabled: true },
];
</script>

<template>
  <AppSegmented v-model="activeView" :options="timeOptions" size="small" aria-label="数据时间范围" />
</template>
