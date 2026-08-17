<script setup lang="ts">
import { AppTimeline } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", title: "需求评审", timestamp: "08-10" },
  { key: "b", title: "开发中", timestamp: "08-12" },
];
</script>

<template>
  <AppTimeline :items="items" pending pending-text="等待测试排期" />
</template>
