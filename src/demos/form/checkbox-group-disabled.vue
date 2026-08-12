<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["free"]);
const options = [
  { label: "免费课", value: "free" },
  { label: "会员课", value: "vip" },
  { label: "训练营", value: "bootcamp" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" disabled aria-label="课程类型" />
</template>
