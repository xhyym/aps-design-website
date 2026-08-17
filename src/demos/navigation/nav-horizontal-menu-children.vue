<script setup lang="ts">
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "shop", label: "商城", path: "/shop", icon: "grid" as const, children: [
    { key: "goods", label: "商品", path: "/shop/goods" },
    { key: "sku", label: "规格", path: "/shop/sku" },
  ] },
  { key: "data", label: "数据", path: "/data", icon: "chart" as const },
];
</script>

<template>
  <AppHorizontalMenu :items="items" active-path="/shop/goods" />
</template>
