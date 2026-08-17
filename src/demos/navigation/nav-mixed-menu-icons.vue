<script setup lang="ts">
import { AppMixedMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "dash", label: "仪表盘", path: "/dash", icon: "chart" as const },
  { key: "goods", label: "商品", path: "/goods", icon: "grid" as const },
  { key: "user", label: "客户", path: "/user", icon: "users" as const },
];
</script>

<template>
  <AppMixedMenu :items="items" active-path="/dash" />
</template>
