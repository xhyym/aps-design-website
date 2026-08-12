<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08-08");
</script>

<template><AppDatePickerPanel v-model="value" disabled aria-label="只读日期面板" /></template>
