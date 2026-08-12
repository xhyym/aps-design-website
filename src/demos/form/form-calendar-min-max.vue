<script setup lang="ts">
import { ref } from "vue";
import { AppCalendar } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-12");
</script>

<template><AppCalendar v-model="date" min="2026-08-01" max="2026-08-31" clearable aria-label="八月可选日期" /></template>
