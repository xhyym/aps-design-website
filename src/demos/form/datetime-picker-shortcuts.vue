<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimePicker, type DatePickerShortcut } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const shortcuts: DatePickerShortcut[] = [{ label: "今天 10:00", value: "2026-08-06T10:00" }, { label: "明天 09:30", value: "2026-08-07T09:30" }];
</script>

<template><AppDateTimePicker v-model="value" :shortcuts="shortcuts" min="2026-08-06T09:00" max="2026-08-08T18:00" /></template>
