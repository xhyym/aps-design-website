<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { label: "商城", href: "/shop" },
  { label: "服饰", href: "/shop/clothes" },
  { label: "男装", href: "/shop/clothes/men" },
  { label: "外套", href: "/shop/clothes/men/coat" },
  { label: "当前商品" },
];
</script>

<template>
  <AppBreadcrumb :items="items" />
</template>
