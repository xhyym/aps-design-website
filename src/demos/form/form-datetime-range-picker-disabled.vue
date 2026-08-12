<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimeRangePicker, type DateRangeValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<DateRangeValue>({ start: "2026-08-06T09:00", end: "2026-08-06T18:00" });
</script>

<template><AppDateTimeRangePicker v-model="value" disabled /></template>
