<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "", end: "" });
</script>

<template><div class="demo-field"><AppTimeRangePicker v-model="value" min="09:00" max="18:00" :step="30" compact aria-label="值班时间" /></div></template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
