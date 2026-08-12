<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field">
    <AppDatePicker v-model="value" min="2026-08-01" max="2026-08-31" invalid described-by="date-hint" placeholder="八月内日期" aria-label="报名日期" />
    <span id="date-hint">仅接受 2026 年 8 月的日期</span>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); display: flex; flex-direction: column; gap: 8px; }
</style>
