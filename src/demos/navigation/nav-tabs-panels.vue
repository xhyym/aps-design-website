<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "概览", content: "概览面板的兜底内容。" },
  { key: "b", label: "详情", content: "详情面板的兜底内容。" },
];
</script>

<template>
  <AppTabs :items="items" show-panels model-value="a" />
</template>
