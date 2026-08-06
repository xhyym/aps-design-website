<script setup lang="ts">
import { ref } from "vue";
import { AppMenu, type MenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("overview");
const items: MenuItem[] = [
  { key: "overview", label: "经营概览", icon: "chart" },
  { key: "orders", label: "订单管理", icon: "grid", children: [{ key: "all-orders", label: "全部订单" }, { key: "returns", label: "退款售后" }] },
  { key: "settings", label: "系统设置", icon: "settings" },
];
</script>

<template>
  <AppMenu v-model="activeKey" :items="items" :default-openeds="['orders']" />
  <p class="result">当前选中：{{ activeKey }}</p>
</template>

<style scoped>
.result { margin: 12px 0 0; color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
