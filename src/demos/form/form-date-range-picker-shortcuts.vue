<script setup lang="ts">
import { ref } from "vue";
import { AppDateRangePicker, type DateRangePickerShortcut, type DateRangeValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<DateRangeValue>({ start: "", end: "" });
const shortcuts: DateRangePickerShortcut[] = [
  { label: "本周", value: { start: "2026-08-10", end: "2026-08-16" } },
  { label: "本月", value: { start: "2026-08-01", end: "2026-08-31" } },
];
</script>

<template>
  <div class="demo-field"><AppDateRangePicker v-model="value" :shortcuts="shortcuts" clearable aria-label="统计周期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
