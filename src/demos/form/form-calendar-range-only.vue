<script setup lang="ts">
import { ref } from "vue";
import { AppCalendar } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-12");
</script>

<template><AppCalendar v-model="date" range-start="2026-08-05" range-end="2026-08-20" aria-label="高亮区间" /></template>
