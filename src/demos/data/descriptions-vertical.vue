<script setup lang="ts">
import { AppDescriptions } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "sku", label: "商品编码", value: "SKU-10086" },
  { key: "price", label: "售价", value: "¥ 899.00" },
  { key: "stock", label: "库存", value: 66 },
];
</script>

<template>
  <AppDescriptions title="商品详情" :items="items" direction="vertical" />
</template>
