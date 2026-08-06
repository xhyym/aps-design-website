<script setup lang="ts">
import { ref } from "vue";
import { AppHorizontalMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activePath = ref("/dashboard");
const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "commerce", label: "交易", path: "/orders", icon: "chart", children: [{ key: "orders", label: "交易订单", path: "/orders" }, { key: "refunds", label: "退款售后", path: "/refunds" }] },
  { key: "settings", label: "系统设置", path: "/settings", icon: "settings" },
];
</script>

<template>
  <AppHorizontalMenu :items="items" :active-path="activePath" @navigate="activePath = $event.path" />
  <p class="result">当前路径：{{ activePath }}</p>
</template>

<style scoped>
.result { margin: 12px 0 0; color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
