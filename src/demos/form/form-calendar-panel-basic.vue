<script setup lang="ts">
import { ref } from "vue";
import { AppCalendarPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-08");
</script>

<template>
  <AppCalendarPanel v-model="date" aria-label="日期面板" />
</template>
