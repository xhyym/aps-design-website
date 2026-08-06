<script setup lang="ts">
import { ref } from "vue";
import { AppCalendar } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-12");
</script>

<template>
  <AppCalendar v-model="date" range-start="2026-08-08" range-end="2026-08-16" min="2026-08-01" max="2026-08-31" aria-label="八月排期" />
</template>
