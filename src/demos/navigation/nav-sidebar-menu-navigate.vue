<script setup lang="ts">
import { ref } from "vue";
import { AppSidebarMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const last = ref("");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
];
</script>

<template>
  <div>
    <AppSidebarMenu :items="items" active-path="/home" @navigate="(item) => (last = item.path)" />
    <p class="hint">最近跳转：{{ last || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
