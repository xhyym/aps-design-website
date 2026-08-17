<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppGlobalSearch } from "aps-design-pro";
import "aps-design-pro/style.css";

const picked = ref("");
const visible = ref(false);
const items = [
  { title: "订单", description: "订单中心", path: "/orders", icon: "chart" as const },
  { title: "退款", description: "退款处理", path: "/refunds", icon: "warning" as const },
];
</script>

<template>
  <div>
    <AppButton @click="visible = true">打开全局搜索</AppButton>
    <AppGlobalSearch v-model="visible" :items="items" @select="(item) => (picked = item.path)" />
    <p class="hint">已选路径：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
