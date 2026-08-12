<script setup lang="ts">
import { ref } from "vue";
import { AppDateRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "", end: "" });
</script>

<template>
  <div class="demo-field">
    <AppDateRangePicker v-model="value" min="2026-08-01" max="2026-08-31" invalid described-by="range-hint" clearable aria-label="报名周期" />
    <span id="range-hint">仅接受 2026 年 8 月内的区间</span>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); display: flex; flex-direction: column; gap: 8px; }
</style>
