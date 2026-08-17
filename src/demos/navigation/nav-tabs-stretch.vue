<script setup lang="ts">
import { AppTabs } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "周一" },
  { key: "b", label: "周二" },
  { key: "c", label: "周三" },
];
</script>

<template>
  <AppTabs :items="items" :stretch="true" model-value="a" />
</template>
