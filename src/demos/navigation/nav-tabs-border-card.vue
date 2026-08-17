<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "基础" },
  { key: "b", label: "高级" },
];
</script>

<template>
  <AppTabs :items="items" type="border-card" model-value="a" />
</template>
