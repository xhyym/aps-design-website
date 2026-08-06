<script setup lang="ts">
import { ref } from "vue";
import { AppCalendarPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-12");

function disableWeekend(value: string) {
  const day = new Date(`${value}T00:00:00`).getDay();
  return day === 0 || day === 6;
}
</script>

<template>
  <AppCalendarPanel v-model="date" min="2026-08-01" max="2026-08-31" :disabled-date="disableWeekend" aria-label="工作日选择" />
</template>
