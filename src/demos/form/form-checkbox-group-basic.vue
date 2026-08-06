<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref(["web"]);
const options = [
  { label: "Web 前端", value: "web" },
  { label: "服务端", value: "server" },
  { label: "人工智能", value: "ai" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" aria-label="学习方向" />
</template>
