<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "09:00", end: "10:30" });
</script>

<template><div class="demo-field"><AppTimeRangePicker v-model="value" clearable aria-label="直播时间" /></div></template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
