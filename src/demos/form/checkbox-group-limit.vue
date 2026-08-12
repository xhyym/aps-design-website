<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["math"]);
const options = [
  { label: "数学", value: "math" },
  { label: "英语", value: "english" },
  { label: "物理", value: "physics" },
  { label: "化学", value: "chemistry" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" :min="1" :max="2" aria-label="擅长科目" />
</template>
