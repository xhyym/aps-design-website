<script setup lang="ts">
import { ref } from "vue";
import { AppMixedMenu, type NavigationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activePath = ref("/orders");
const items: NavigationItem[] = [
  { key: "dashboard", label: "工作台", path: "/dashboard", icon: "grid" },
  { key: "commerce", label: "交易中心", path: "/orders", icon: "chart", children: [{ key: "orders", label: "交易订单", path: "/orders" }, { key: "refunds", label: "退款售后", path: "/refunds" }] },
];
</script>

<template>
  <AppMixedMenu :items="items" :active-path="activePath" @navigate="activePath = $event.path" />
</template>
