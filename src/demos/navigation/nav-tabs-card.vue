<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "概览" },
  { key: "b", label: "详情" },
  { key: "c", label: "日志" },
];
</script>

<template>
  <AppTabs :items="items" type="card" model-value="a" />
</template>
