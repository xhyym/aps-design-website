<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>(["2026-08-08", "2026-08-12"]);
</script>

<template><AppDatePickerPanel v-model="value" type="dates" aria-label="多日期选择" /></template>
