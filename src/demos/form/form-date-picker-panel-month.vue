<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08");
</script>

<template>
  <AppDatePickerPanel v-model="value" type="month" min="2026-01" max="2026-12" aria-label="发布月份" />
</template>
