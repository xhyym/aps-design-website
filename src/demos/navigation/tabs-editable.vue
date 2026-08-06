<script setup lang="ts">
import { ref } from "vue";
import { AppTabs, type TabItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeTab = ref("orders");
const items = ref<TabItem[]>([{ key: "orders", label: "订单列表", closable: true }, { key: "detail", label: "订单详情", closable: true }]);

function removeTab(key: string): void {
  items.value = items.value.filter((item) => item.key !== key);
  activeTab.value = items.value[0]?.key ?? "";
}
</script>

<template>
  <AppTabs v-model="activeTab" :items="items" type="card" editable @tab-remove="removeTab" @tab-add="items.push({ key: `tab-${items.length + 1}`, label: `新页签 ${items.length + 1}`, closable: true })" />
</template>
