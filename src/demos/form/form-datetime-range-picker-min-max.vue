<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimeRangePicker, type DateRangeValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<DateRangeValue>({ start: "", end: "" });
</script>

<template><AppDateTimeRangePicker v-model="value" min="2026-08-01T00:00" max="2026-08-31T23:59" clearable /></template>
