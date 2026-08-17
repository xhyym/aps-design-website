<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppGlobalSearch } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { title: "商品管理", description: "维护商品信息", path: "/goods", icon: "grid" as const },
  { title: "库存", description: "库存查询", path: "/stock", icon: "copy" as const },
  { title: "采购", description: "采购单", path: "/purchase", icon: "download" as const },
  { title: "销售", description: "销售单", path: "/sales", icon: "chart" as const },
  { title: "财务", description: "对账与报表", path: "/finance", icon: "settings" as const },
];
</script>

<template>
  <div>
    <p class="hint">结果较多时列表可滚动。</p>
    <AppButton @click="visible = true">打开全局搜索</AppButton>
    <AppGlobalSearch v-model="visible" :items="items" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); }
</style>
