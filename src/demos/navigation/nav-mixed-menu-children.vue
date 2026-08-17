<script setup lang="ts">
import { AppMixedMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "shop", label: "商城", path: "/shop", icon: "grid" as const, children: [
    { key: "g", label: "商品", path: "/shop/goods" },
    { key: "s", label: "规格", path: "/shop/specs" },
  ] },
  { key: "data", label: "数据", path: "/data", icon: "chart" as const },
];
</script>

<template>
  <AppMixedMenu :items="items" active-path="/shop" />
</template>
