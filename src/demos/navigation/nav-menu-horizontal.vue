<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "工作台" },
  { key: "b", label: "订单中心", children: [
    { key: "b1", label: "订单列表" },
    { key: "b2", label: "售后" },
  ] },
  { key: "c", label: "报表" },
];
</script>

<template>
  <AppMenu :items="items" mode="horizontal" default-active="a" />
</template>
