<script setup lang="ts">
import { AppDataListCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "sku", label: "SKU", value: "SKU-88321", detail: "唯一库存编码" },
  { key: "stock", label: "库存", value: 128, detail: "可用 + 在途" },
  { key: "price", label: "售价", value: "¥ 199.00", detail: "含税" },
];
</script>

<template>
  <AppDataListCard title="商品信息" :items="items" />
</template>
