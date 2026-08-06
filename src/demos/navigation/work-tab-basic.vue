<script setup lang="ts">
import { ref } from "vue";
import { AppWorkTab, type TabItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("orders");
const items: TabItem[] = [{ key: "orders", label: "交易订单" }, { key: "detail", label: "订单详情", closable: true }];
</script>

<template>
  <AppWorkTab v-model="activeKey" :items="items" />
</template>
