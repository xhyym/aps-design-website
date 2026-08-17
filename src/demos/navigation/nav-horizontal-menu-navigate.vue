<script setup lang="ts">
import { ref } from "vue";
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const current = ref("");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
];
</script>

<template>
  <div>
    <AppHorizontalMenu :items="items" active-path="/home" @navigate="(item) => (current = item.path)" />
    <p class="hint">最近跳转：{{ current || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
