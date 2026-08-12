<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimePicker, type DatePickerDisabledDate } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const disableWeekend: DatePickerDisabledDate = (value) => {
  const day = new Date(`${value.slice(0, 10)}T00:00:00`).getDay();
  return day === 0 || day === 6;
};
</script>

<template><AppDateTimePicker v-model="value" :disabled-date="disableWeekend" clearable /></template>
