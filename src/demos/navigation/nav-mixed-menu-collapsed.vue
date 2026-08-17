<script setup lang="ts">
import { AppMixedMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "home", label: "首页", path: "/home", icon: "grid" as const },
  { key: "order", label: "订单", path: "/order", icon: "chart" as const, children: [
    { key: "olist", label: "订单列表", path: "/order/list" },
    { key: "after", label: "售后", path: "/order/after" },
  ] },
  { key: "set", label: "设置", path: "/set", icon: "settings" as const },
];
</script>

<template>
  <AppMixedMenu :items="items" active-path="/order" :collapsed="true" />
</template>
