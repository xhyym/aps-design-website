<script setup lang="ts">
import { ref } from "vue";
import { AppColumnSettings } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref({ id: true, name: true, price: true, stock: true, status: true });
const options = [
  { key: "id", label: "编号" },
  { key: "name", label: "商品名称" },
  { key: "price", label: "单价" },
  { key: "stock", label: "库存" },
  { key: "status", label: "状态" },
];
</script>

<template>
  <AppColumnSettings v-model="visible" :options="options" :min-visible="2" />
</template>
