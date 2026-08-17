<script setup lang="ts">
import { AppTimeline } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", title: "第一步", timestamp: "08-01" },
  { key: "b", title: "第二步", timestamp: "08-05" },
  { key: "c", title: "第三步", timestamp: "08-09" },
];
</script>

<template>
  <AppTimeline :items="items" reverse />
</template>
