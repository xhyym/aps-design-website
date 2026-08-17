<script setup lang="ts">
import { ref } from "vue";
import { AppHorizontalMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref("/order");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
  { key: "user", label: "客户", path: "/user" },
];
</script>

<template>
  <AppHorizontalMenu :items="items" :active-path="active" />
</template>
