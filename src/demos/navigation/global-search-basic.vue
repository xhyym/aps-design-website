<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppGlobalSearch } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const selected = ref("");
const items = [
  { title: "订单中心", description: "处理待发货订单", path: "/orders", icon: "chart" as const },
  { title: "商品管理", description: "维护商品资料", path: "/products", icon: "grid" as const },
];
</script>

<template>
  <AppButton @click="visible = true">打开全局搜索</AppButton>
  <small v-if="selected">已选择：{{ selected }}</small>
  <AppGlobalSearch v-model="visible" :items="items" @select="selected = $event.title" />
</template>

<style scoped>
small { margin-left: 10px; color: var(--aps-muted); }
</style>
