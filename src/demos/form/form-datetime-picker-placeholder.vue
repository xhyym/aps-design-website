<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppDateTimePicker v-model="value" placeholder="选择发布时间" aria-label="发布时间" clearable /></template>
