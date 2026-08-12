<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026");
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" type="year" clearable placeholder="选择年份" aria-label="招生年份" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
