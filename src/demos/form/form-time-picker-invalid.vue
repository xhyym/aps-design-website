<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field">
    <AppTimePicker v-model="value" invalid described-by="time-hint" placeholder="选择时间" aria-label="时间" />
    <span id="time-hint">请选择有效的时间点</span>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); display: flex; flex-direction: column; gap: 8px; }
</style>
