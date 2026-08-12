<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "", end: "" });
</script>

<template>
  <div class="demo-field">
    <AppTimeRangePicker v-model="value" invalid described-by="tr-hint" clearable aria-label="时间范围" />
    <span id="tr-hint">请选择完整的时间区间</span>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); display: flex; flex-direction: column; gap: 8px; }
</style>
