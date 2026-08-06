<script setup lang="ts">
import { ref } from "vue";
import { AppDateRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "2026-03", end: "2026-08" });
</script>

<template>
  <div class="demo-field"><AppDateRangePicker v-model="value" type="monthrange" compact aria-label="经营月份" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
