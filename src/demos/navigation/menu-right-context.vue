<script setup lang="ts">
import { ref } from "vue";
import { AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [{ key: "open", label: "打开详情", icon: "arrow-right" as const }, { key: "archive", label: "归档", icon: "check" as const }];
</script>

<template>
  <AppMenuRight v-model="visible" :items="items" label="订单操作" @select="visible = false">
    <template #trigger="{ toggle }"><button class="record" type="button" @click="toggle">订单 #20260806001 <span>点击查看操作</span></button></template>
  </AppMenuRight>
</template>

<style scoped>
.record { display: flex; width: 100%; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); font: inherit; text-align: left; }.record span { color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
