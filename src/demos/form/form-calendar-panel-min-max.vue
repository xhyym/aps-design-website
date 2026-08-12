<script setup lang="ts">
import { ref } from "vue";
import { AppCalendarPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-12");
</script>

<template><AppCalendarPanel v-model="date" min="2026-08-01" max="2026-08-31" aria-label="八月可选" /></template>
