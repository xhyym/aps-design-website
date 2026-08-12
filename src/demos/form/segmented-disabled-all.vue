<script setup lang="ts">
import { ref } from "vue";
import { AppSegmented } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("all");
const options = [
  { label: "全部", value: "all" },
  { label: "进行中", value: "active" },
  { label: "已归档", value: "archived" },
];
</script>

<template>
  <AppSegmented v-model="value" :options="options" disabled aria-label="课程状态" />
</template>
