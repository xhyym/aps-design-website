<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppGlobalSearch } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { title: "概览", description: "数据概览", path: "/dashboard", icon: "grid" as const },
  { title: "报表", description: "经营报表", path: "/reports", icon: "chart" as const },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">打开搜索</AppButton>
    <AppGlobalSearch v-model="visible" :items="items" />
  </div>
</template>
