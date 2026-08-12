<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { label: "周报", value: "weekly", description: "每周一汇总" },
  { label: "月报", value: "monthly", description: "每月初汇总" },
  { label: "实时", value: "realtime", description: "数据变化即推送" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" aria-label="报表订阅" />
</template>
