<script setup lang="ts">
import { ref } from "vue";
import { AppWorkTab, type TabItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("dashboard");
const items = ref<TabItem[]>([{ key: "dashboard", label: "工作台" }, { key: "members", label: "成员管理", closable: true }, { key: "settings", label: "系统设置", closable: true }]);

function closeTab(key: string): void {
  items.value = items.value.filter((item) => item.key !== key);
  if (!items.value.some((item) => item.key === activeKey.value)) activeKey.value = items.value[0]?.key ?? "";
}
</script>

<template>
  <AppWorkTab v-model="activeKey" :items="items" @close="closeTab" />
</template>
