<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "消息", icon: "bell" as const, badge: 9 },
  { key: "b", label: "任务", icon: "check" as const, badge: "new" },
  { key: "c", label: "设置", icon: "settings" as const },
];
</script>

<template>
  <AppMenu :items="items" default-active="a" />
</template>
