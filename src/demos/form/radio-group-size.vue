<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("a");
const large = ref("a");
const smallOptions = [
  { label: "选项一", value: "a" },
  { label: "选项二", value: "b" },
];
const largeOptions = [
  { label: "选项一", value: "a" },
  { label: "选项二", value: "b" },
];
</script>

<template>
  <div class="demo-stack">
    <AppRadioGroup v-model="small" :options="smallOptions" size="small" aria-label="小尺寸" />
    <AppRadioGroup v-model="large" :options="largeOptions" size="large" aria-label="大尺寸" />
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 12px; }
</style>
