<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppDateTimePicker v-model="value" min="2026-08-10T00:00" clearable /></template>
