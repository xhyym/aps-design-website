<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette, type CommandPaletteItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: CommandPaletteItem[] = [
  { key: "a", title: "创建订单" },
  { key: "b", title: "导出报表" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">快速操作</AppButton>
    <AppCommandPalette v-model="open" :items="items" placeholder="输入操作名称…" />
  </div>
</template>
