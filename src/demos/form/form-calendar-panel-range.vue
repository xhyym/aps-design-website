<script setup lang="ts">
import { ref } from "vue";
import { AppCalendarPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-12");
</script>

<template><AppCalendarPanel v-model="date" range-start="2026-08-08" range-end="2026-08-16" aria-label="区间高亮" /></template>
