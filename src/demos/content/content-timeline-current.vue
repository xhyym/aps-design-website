<script setup lang="ts">
import { AppTimeline } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "step1", title: "创建订单", timestamp: "10:00" },
  { key: "step2", title: "商家接单", timestamp: "10:05" },
  { key: "step3", title: "配送中", timestamp: "10:20" },
  { key: "step4", title: "已签收", timestamp: "" },
];
</script>

<template>
  <AppTimeline :items="items" current-key="step3" />
</template>
