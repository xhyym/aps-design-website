<script setup lang="ts">
import { ref } from "vue";
import { AppSegmented } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("day");
const normal = ref("day");
const options = [
  { label: "日", value: "day" },
  { label: "周", value: "week" },
  { label: "月", value: "month" },
];
</script>

<template>
  <div class="demo-stack">
    <AppSegmented v-model="small" :options="options" size="small" aria-label="小尺寸" />
    <AppSegmented v-model="normal" :options="options" size="default" aria-label="默认尺寸" />
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 12px; }
</style>
