<script setup lang="ts">
import { ref } from "vue";
import { AppCalendar } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-08");
</script>

<template><AppCalendar v-model="date" :show-footer="false" aria-label="排期日期" /></template>
