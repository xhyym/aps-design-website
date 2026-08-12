<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker, type DatePickerShortcut } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const shortcuts: DatePickerShortcut[] = [
  { label: "今天", value: "2026-08-12" },
  { label: "本周一", value: "2026-08-10" },
  { label: "月初", value: "2026-08-01" },
];
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" :shortcuts="shortcuts" clearable placeholder="选择日期" aria-label="快捷日期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
