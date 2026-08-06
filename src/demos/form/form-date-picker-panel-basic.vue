<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08-08");
</script>

<template>
  <AppDatePickerPanel v-model="value" aria-label="日期选择面板" />
</template>
