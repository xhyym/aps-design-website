<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["2026-08-08", "2026-08-15"]);
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="values" type="dates" aria-label="线下活动日期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
