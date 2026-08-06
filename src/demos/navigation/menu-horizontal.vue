<script setup lang="ts">
import { ref } from "vue";
import { AppMenu, type MenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("home");
const items: MenuItem[] = [
  { key: "home", label: "首页", icon: "grid" },
  { key: "report", label: "经营报表", icon: "chart" },
  { key: "settings", label: "设置", icon: "settings" },
];
</script>

<template>
  <AppMenu v-model="activeKey" mode="horizontal" :items="items" />
</template>
