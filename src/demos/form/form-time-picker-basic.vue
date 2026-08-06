<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("09:30");
</script>

<template><div class="demo-field"><AppTimePicker v-model="value" clearable aria-label="开播时间" /></div></template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
