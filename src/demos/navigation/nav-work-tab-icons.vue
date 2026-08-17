<script setup lang="ts">
import { AppWorkTab } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "消息", icon: "bell" as const },
  { key: "b", label: "任务", icon: "check" as const },
];
</script>

<template>
  <AppWorkTab :items="items" model-value="a" />
</template>
