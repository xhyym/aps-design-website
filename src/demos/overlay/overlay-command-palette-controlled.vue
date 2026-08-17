<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette, type CommandPaletteItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: CommandPaletteItem[] = [
  { key: "settings", title: "打开设置", icon: "settings" as const },
  { key: "help", title: "查看帮助", icon: "warning" as const },
];
</script>

<template>
  <div class="row">
    <AppButton @click="open = true">打开</AppButton>
    <AppButton @click="open = false">关闭</AppButton>
    <AppCommandPalette v-model="open" :items="items" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; }
</style>
