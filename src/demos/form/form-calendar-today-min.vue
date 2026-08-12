<script setup lang="ts">
import { ref } from "vue";
import { AppCalendar } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("");
const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
</script>

<template>
  <div class="demo-field"><AppCalendar v-model="date" :min="today" clearable aria-label="不可选择过去的日期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
