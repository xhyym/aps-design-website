<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const selected = ref("");
const items = [{ key: "create", title: "新建订单", description: "创建一笔新的交易订单", icon: "plus" as const }, { key: "search", title: "搜索订单", description: "按订单号或客户查找", icon: "search" as const }];
</script>

<template>
  <AppButton @click="visible = true">打开快捷入口</AppButton>
  <small v-if="selected">已执行：{{ selected }}</small>
  <AppFastEnter v-model="visible" :items="items" @select="selected = $event.title" />
</template>

<style scoped>
small { margin-left: 10px; color: var(--aps-muted); }
</style>
