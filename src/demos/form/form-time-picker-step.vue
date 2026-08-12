<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field"><AppTimePicker v-model="value" :step="15" clearable placeholder="每 15 分钟" aria-label="提醒时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
