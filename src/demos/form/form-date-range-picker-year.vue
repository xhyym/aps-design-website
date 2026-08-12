<script setup lang="ts">
import { ref } from "vue";
import { AppDateRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "2025", end: "2026" });
</script>

<template>
  <div class="demo-field"><AppDateRangePicker v-model="value" type="yearrange" clearable aria-label="招生年份" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
