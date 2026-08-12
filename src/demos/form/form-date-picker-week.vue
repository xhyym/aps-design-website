<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" type="week" clearable placeholder="选择周" aria-label="排期周" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
