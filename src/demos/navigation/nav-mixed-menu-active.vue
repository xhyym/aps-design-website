<script setup lang="ts">
import { ref } from "vue";
import { AppMixedMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref("/order");
const items = [
  { key: "home", label: "首页", path: "/home" },
  { key: "order", label: "订单", path: "/order" },
  { key: "set", label: "设置", path: "/set" },
];
</script>

<template>
  <AppMixedMenu :items="items" :active-path="active" />
</template>
