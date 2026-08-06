<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08-08");
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" clearable aria-label="开课日期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
