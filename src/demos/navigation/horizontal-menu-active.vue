<script setup lang="ts">
import { AppHorizontalMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: NavigationItem[] = [
  { key: "products", label: "商品", path: "/products", icon: "grid" },
  { key: "customer", label: "客户", path: "/customers", icon: "users", children: [{ key: "list", label: "客户列表", path: "/customers" }, { key: "tags", label: "客户标签", path: "/customers/tags" }] },
];
</script>

<template>
  <AppHorizontalMenu :items="items" active-path="/customers/tags" @navigate="() => undefined" />
</template>
