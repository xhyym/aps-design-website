<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimeRangePicker, type DateRangeValue, type DateTimeRangePickerShortcut } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<DateRangeValue>({ start: "", end: "" });
const shortcuts: DateTimeRangePickerShortcut[] = [{ label: "今日工作时间", value: { start: "2026-08-06T09:00", end: "2026-08-06T18:00" } }, { label: "明日会议", value: { start: "2026-08-07T14:00", end: "2026-08-07T15:30" } }];
</script>

<template><AppDateTimeRangePicker v-model="value" :shortcuts="shortcuts" start-label="开始会议" end-label="结束会议" /></template>
