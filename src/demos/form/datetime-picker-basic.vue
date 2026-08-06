<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08-06T10:30");
</script>

<template><AppDateTimePicker v-model="value" clearable /></template>
