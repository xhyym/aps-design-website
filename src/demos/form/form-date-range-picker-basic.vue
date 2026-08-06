<script setup lang="ts">
import { ref } from "vue";
import { AppDateRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "2026-08-01", end: "2026-08-15" });
</script>

<template>
  <div class="demo-field"><AppDateRangePicker v-model="value" clearable aria-label="报名日期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
