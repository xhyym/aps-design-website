<script setup lang="ts">
import { ref } from "vue";
import { AppColumnSettings } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref({ id: true, order: true, customer: true, amount: true, created: true, status: true });
const options = [
  { key: "id", label: "订单号" },
  { key: "order", label: "商品" },
  { key: "customer", label: "客户" },
  { key: "amount", label: "金额" },
  { key: "created", label: "下单时间" },
  { key: "status", label: "状态" },
];
</script>

<template>
  <AppColumnSettings v-model="visible" :options="options" storage-key="order-cols" />
</template>
