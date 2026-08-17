<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "下单" },
  { key: "2", title: "支付" },
  { key: "3", title: "发货" },
];
</script>

<template>
  <AppSteps :items="items" aria-label="下单流程" />
</template>
