<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppDatePickerPanel v-model="value" type="week" aria-label="周选择" /></template>
