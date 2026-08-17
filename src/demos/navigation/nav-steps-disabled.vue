<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "草稿" },
  { key: "2", title: "待审核", disabled: true },
  { key: "3", title: "已发布" },
];
</script>

<template>
  <AppSteps :items="items" />
</template>
