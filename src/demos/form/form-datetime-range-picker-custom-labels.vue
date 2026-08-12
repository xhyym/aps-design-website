<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimeRangePicker, type DateRangeValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<DateRangeValue>({ start: "", end: "" });
</script>

<template><AppDateTimeRangePicker v-model="value" start-label="开始会议" end-label="结束会议" compact clearable /></template>
