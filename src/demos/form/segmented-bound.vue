<script setup lang="ts">
import { ref } from "vue";
import { AppSegmented } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("list");
const options = [
  { label: "列表", value: "list" },
  { label: "看板", value: "board" },
];
</script>

<template>
  <div class="demo-stack">
    <AppSegmented v-model="value" :options="options" aria-label="视图切换" />
    <p class="demo-hint">当前视图：{{ value === "list" ? "列表视图" : "看板视图" }}</p>
  </div>
</template>

<style scoped>
.demo-stack { display: grid; gap: 10px; }
.demo-hint { margin: 0; font-size: 14px; }
</style>
