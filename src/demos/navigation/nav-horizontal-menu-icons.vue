<script setup lang="ts">
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "home", label: "首页", path: "/home", icon: "grid" as const },
  { key: "order", label: "订单", path: "/order", icon: "chart" as const },
  { key: "user", label: "客户", path: "/user", icon: "users" as const },
];
</script>

<template>
  <AppHorizontalMenu :items="items" active-path="/home" />
</template>
