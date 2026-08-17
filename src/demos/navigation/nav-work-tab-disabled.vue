<script setup lang="ts">
import { AppWorkTab } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "进行中" },
  { key: "b", label: "已锁定", disabled: true },
];
</script>

<template>
  <AppWorkTab :items="items" model-value="a" />
</template>
