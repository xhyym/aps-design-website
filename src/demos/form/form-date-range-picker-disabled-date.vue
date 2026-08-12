<script setup lang="ts">
import { ref } from "vue";
import { AppDateRangePicker, type DatePickerDisabledDate } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "", end: "" });
const disableWeekend: DatePickerDisabledDate = (value) => {
  const day = new Date(`${value}T00:00:00`).getDay();
  return day === 0 || day === 6;
};
</script>

<template>
  <div class="demo-field"><AppDateRangePicker v-model="value" :disabled-date="disableWeekend" clearable aria-label="排期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
