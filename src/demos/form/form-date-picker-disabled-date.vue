<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker, type DatePickerDisabledDate } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const disableWeekend: DatePickerDisabledDate = (value) => {
  const day = new Date(`${value}T00:00:00`).getDay();
  return day === 0 || day === 6;
};
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" :disabled-date="disableWeekend" clearable placeholder="仅工作日" aria-label="工作日" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
