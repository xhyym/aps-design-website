<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "标签一" },
  { key: "b", label: "标签二" },
];
</script>

<template>
  <AppTabs :items="items" position="left" model-value="a" />
</template>
