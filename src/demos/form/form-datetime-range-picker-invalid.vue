<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimeRangePicker, type DateRangeValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<DateRangeValue>({ start: "", end: "" });
</script>

<template>
  <div class="demo-stack">
    <AppDateTimeRangePicker v-model="value" invalid described-by="dtr-hint" clearable />
    <span id="dtr-hint">请选择完整的起止日期时间</span>
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-direction: column; gap: 8px; width: min(100%, 420px); }
</style>
