<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppGlobalSearch } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { title: "订单管理", description: "查看与处理订单", path: "/orders", icon: "chart" as const },
  { title: "客户列表", description: "维护客户资料", path: "/customers", icon: "users" as const },
  { title: "系统设置", description: "配置应用参数", path: "/settings", icon: "settings" as const },
];
</script>

<template>
  <div>
    <p class="hint">点击「搜索」触发器查看带图标的结果。</p>
    <AppButton @click="visible = true">打开全局搜索</AppButton>
    <AppGlobalSearch v-model="visible" :items="items" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); }
</style>
