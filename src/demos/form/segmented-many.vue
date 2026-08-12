<script setup lang="ts">
import { ref } from "vue";
import { AppSegmented } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("jan");
const options = [
  { label: "一月", value: "jan" },
  { label: "二月", value: "feb" },
  { label: "三月", value: "mar" },
  { label: "四月", value: "apr" },
  { label: "五月", value: "may" },
];
</script>

<template>
  <AppSegmented v-model="value" :options="options" aria-label="月份筛选" />
</template>
