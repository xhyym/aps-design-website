<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08");
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" type="month" clearable placeholder="选择月份" aria-label="发布月份" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
