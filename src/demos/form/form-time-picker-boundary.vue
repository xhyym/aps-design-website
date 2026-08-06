<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><div class="demo-field"><AppTimePicker v-model="value" min="09:00" max="18:00" :step="30" placeholder="选择工作时间" aria-label="工作时间" /></div></template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
